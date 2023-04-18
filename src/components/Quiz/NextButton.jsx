import _ from "../../pages/quiz/quizContent.module.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

export function NextButton() {
  const { selectedAnswer, nextStep } = useContext(DataContext);

  return (
    <button
      className="filled_button"
      onClick={nextStep}
      disabled={selectedAnswer === ""}
    >
      Next
    </button>
  );
}
