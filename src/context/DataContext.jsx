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

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { i18n } = useTranslation();

  const languages = languagesData;
  const [selectedLanguage, setSelectedLanguage] = useState({});
  const [isOpenLanguageSelect, setOpenLanguageSelect] = useState(false);

  const [allLevels, setAllLevels] = useState({});
  const [isLoadingData, setLoadingData] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [quizData, setQuizData] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [questions, setQuestions] = useState({});
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const handleLanguageChange = useCallback(
    (activeLanguage) => {
      i18n.changeLanguage(activeLanguage);
      const newUrl = `/${activeLanguage}`;
      setOpenLanguageSelect(false);
      window.history.pushState({}, "", newUrl);
    },
    [i18n]
  );
  useEffect(() => {
    const activeLanguage = languages.find(
      (active) => active.value === i18n.language
    );
    setSelectedLanguage(activeLanguage);
  }, [isOpenLanguageSelect, selectedLanguage]);

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
    setLoadingQuiz(false);

  };

  const startQuiz = useCallback(() => {
    if (selectedTopic === "" || !quizData) return;
    const activeCategory = quizData.allTopic.find(
      (item) => item.topic === selectedTopic
    );
    const { questions: activeQuestions } = activeCategory;
    setQuestions(activeCategory);
    setQuestion(activeQuestions[activeStep][selectedLanguage.value].question);
    setAnswer(activeQuestions[activeStep][selectedLanguage.value].choices);
    setLoadingQuiz(true);
  }, [activeStep, quizData, selectedTopic]);

  const nextStep = useCallback(() => {
    if (showResult) return;
    setSelectedAnswer("");
    const isCorrect =
      selectedAnswer ===
      questions.questions[activeStep][selectedLanguage.value].correctAnswer;
    setResult((prev) => ({
      ...prev,
      score: prev.score + (isCorrect ? quizData.perQuestionScore : 0),
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1,
    }));
    setActiveStep((prev) =>
      prev === questions.totalQuestions - 1 ? prev + 1 : prev + 1
    );
    setShowResult(
      (prev) => prev || activeStep === questions.totalQuestions - 1
    );
  }, [activeStep, quizData, questions, selectedAnswer, showResult]);

  useEffect(() => {
    if (!showResult) {
      startQuiz();
    }
  }, [activeStep]);

  const playAgain = () => {
    setSelectedTopic(selectedTopic)
    setLoadingData(false)
    setShowResult(false)
    setActiveStep(0)
  }

  const backToHome = () => {
    setLoadingData(true)
    setShowResult(false)
    setActiveStep(0)
  }

  return (
    <DataContext.Provider
      value={{
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
        selectedTopic,
        setSelectedTopic,
        startQuiz,
        loadingQuiz,
        showResult,
        activeStep,
        totalQuestions: questions?.totalQuestions,
        question,
        answer,
        selectedAnswer,
        setSelectedAnswer,
        nextStep,
        result,
        backToHome,
        playAgain
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
