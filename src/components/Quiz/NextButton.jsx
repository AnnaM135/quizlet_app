import { useTranslation } from "react-i18next";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

export function NextButton() {
  const { t } = useTranslation();

  const { nextStep } = useContext(DataContext);

  return (
    <button
      className="filled_button"
      onClick={nextStep}
      // disabled={selectedAnswer === ""}
    >
      {t("next")}
    </button>
  );
}
