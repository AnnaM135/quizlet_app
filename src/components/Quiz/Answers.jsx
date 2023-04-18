import _ from "../../pages/quiz/quizContent.module.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

export function Answers() {
  const { answer, selectedAnswer, setSelectedAnswer } = useContext(DataContext);
  return (
    <ul className={_.__answers}>
      {answer.map((answer) => (
        <li key={answer}>
          <label className={selectedAnswer !== answer ? `${_.__answers_option}` : `${_.__answers_option} ${_.__answers_option_active}`} htmlFor={`${answer}`}>
            <input
              className={_.__answers_inp}
              type="radio"
              name="answers"
              id={`${answer}`}
              onChange={(e) => setSelectedAnswer(e.target.id)}
            />
            <span className={_.__answers_name}>{answer}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
