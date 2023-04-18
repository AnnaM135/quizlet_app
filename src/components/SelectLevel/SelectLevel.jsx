import { useContext } from "react";
import { useTranslation } from "react-i18next";
import DataContext from "../../context/DataContext";
import _ from "./level.module.scss";

export function SelectLevel() {
  const { levels, selectedLevel, setSelectedLevel, handleLevelSelect } =
    useContext(DataContext);
  const { t } = useTranslation();

  return (
    <div className={_._}>
      <h3 className={_.__title}>{t("chooseTitle")}</h3>
      <form className={_.__select}>
        {levels?.map((item) => (
          <label
            className={_.__select_option}
            key={item.level}
            htmlFor={`${item.level}`}
          >
            <input
              className={_.__select_inp}
              type="radio"
              name="levels"
              id={`${item.level}`}
              onChange={(e) => setSelectedLevel(e.target.id)}
            />
            <span className={_.__select_name}>{item.level}</span>
          </label>
        ))}
      </form>
      <button
        className="filled_button"
        disabled={selectedLevel === ""}
        onClick={handleLevelSelect}
      >
        {t("levelBtn")}
      </button>
    </div>
  );
}
