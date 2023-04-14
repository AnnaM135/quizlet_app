import { useContext } from "react";
import DataContext from "../../context/DataContext";
import _ from "./languages.module.scss";
import Arrow from "../../assets/images/arrow.svg";

function Languages() {
  const {
    languages,
    selectedLanguage,
    isOpenLanguageSelect,
    setOpenLanguageSelect,
    handleLanguageChange,
    isLoadingData,
  } = useContext(DataContext);
  return (
    <div className={_._}>
      <div
        className={_.__selector_country}
        onClick={() => setOpenLanguageSelect(!isOpenLanguageSelect)}
      >
        <img
          className={_.__selector_flag}
          src={selectedLanguage.flag}
          alt={`select the language ${selectedLanguage.name}`}
        />
        <span className={_.__selector_name}>{selectedLanguage.name}</span>
        {isLoadingData && (
          <img
            className={_.__selector_arrow}
            src={Arrow}
            alt="select the language"
            style={{ rotate: isOpenLanguageSelect ? "-90deg" : "90deg" }}
          />
        )}
      </div>
      {isLoadingData && (
        <ul
          className={_.__selector}
          style={{ visibility: isOpenLanguageSelect ? "visible" : "hidden" }}
        >
          {languages.map(
            (item) =>
              item !== selectedLanguage && (
                <li
                  className={_.__selector_country}
                  key={item.id}
                  onClick={() => handleLanguageChange(item.value)}
                >
                  <img
                    className={_.__selector_flag}
                    src={item.flag}
                    alt={`select the language ${item.name}`}
                  />
                  <span className={_.__selector_name}>{item.name}</span>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}
export default Languages;
