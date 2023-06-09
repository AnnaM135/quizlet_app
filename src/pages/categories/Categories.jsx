import { useContext } from "react";
import { useTranslation } from "react-i18next";
import DataContext from "../../context/DataContext";
import {
  categoriesCardColors,
  categoriesCardImages,
} from "../../data/categoryData";
import _ from "./categories.module.scss";

export function Categories() {
  const { t } = useTranslation();
  const { selectedLevel, allTopic, selectedTopic, setSelectedTopic, startQuiz, error } =
    useContext(DataContext);

  return (
    <div className={_._}>
      <h3 className={_.__title}>{t("categoryTitle")}</h3>
      <h4 className={_.__level}>
        {t("selectedLevel")} {selectedLevel} Level
      </h4>
      <span className="error_title">{error}</span>

      <div className={_.__cards}>
        {allTopic?.map((card, index) => (
          <label
            className={
              selectedTopic !== card.topic
                ? `${_.__card}`
                : `${_.__card} ${_.__card_active}`
            }
            htmlFor={`${card.topic}`}
            key={index}
            style={{
              backgroundColor: categoriesCardColors[index].color,
              backgroundImage: categoriesCardColors[index].wave,
            }}
          >
            <input
              className={_.__card_inp}
              type="radio"
              name="topics"
              id={`${card.topic}`}
              onChange={(e) => setSelectedTopic(e.target.id)}
            />
            <img
              className={_.__card_img}
              src={categoriesCardImages[index]}
              alt={card.description}
            />
            <h2 className={_.__card_title}>{card.topic}</h2>
            <p className={_.__card_text}>{card.description}</p>
          </label>
        ))}
      </div>
      <button className="filled_button" onClick={startQuiz}>{t("start")}</button>
    </div>
  );
}
