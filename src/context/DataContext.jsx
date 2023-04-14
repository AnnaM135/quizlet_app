import { createContext, useState, useEffect, useCallback } from "react";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "../locales/en.json";
import ruTranslation from "../locales/ru.json";
import { languagesData } from "../data/LaguagesData";
import { fetchData } from "../utils/api";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const DataContext = createContext({})


export const DataProvider = ({children}) => {
    const { i18n } = useTranslation();

    const languages = languagesData;
    const [selectedLanguage, setSelectedLanguage] = useState({})
    const [isOpenLanguageSelect, setOpenLanguageSelect] = useState(false)

    const [allLevels, setAllLevels] = useState({});
    const [isLoadingData, setLoadingData] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState("");
    const [quizData, setQuizData] = useState(null);

    const handleLanguageChange = useCallback(
        (activeLanguage) => {
            i18n.changeLanguage(activeLanguage);
            const newUrl = `/${activeLanguage}`;
            setOpenLanguageSelect(false)
            window.history.pushState({}, "", newUrl);
        },
    [i18n])
    useEffect(() => {
        const activeLanguage = languages.find((active) => active.value === i18n.language)
        setSelectedLanguage(activeLanguage)
    }, [isOpenLanguageSelect, selectedLanguage])

    useEffect(() => {
        fetchData("/src/data/database.json", setAllLevels);
        setLoadingData(true);
        window.history.pushState({}, "", i18n.language);
      }, []);
    const handleLevelSelect = () => {
        if (selectedLevel === "") return;
        setSelectedLevel(selectedLevel);
        const activeLevel = allLevels.quizlet?.find(
            (item) => item.level === selectedLevel
          );
        setQuizData(activeLevel);
        setLoadingData(false);
    };  
    return (
        <DataContext.Provider value={{
            languages,
            selectedLanguage,
            isOpenLanguageSelect,
            setOpenLanguageSelect,
            handleLanguageChange,
            isLoadingData,
            levels: allLevels?.quizlet,
            selectedLevel,
            setSelectedLevel,
            handleLevelSelect,
            quizData,
            allTopic: quizData?.allTopic,

        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
