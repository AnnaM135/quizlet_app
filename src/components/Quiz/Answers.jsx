import _ from "../../pages/quiz/quizContent.module.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

export function Answers() {
  const { answer, setSelectedAnswer } = useContext(DataContext);

  return (
    <ul className={_.__answers}>
      {answer.map((answer) => (
        <li className={_.__answers_option} key={answer}>
          <input
            className={_.__answers_inp}
            type="radio"
            name="answers"
            id={`${answer}`}
            onChange={(e) => setSelectedAnswer(e.target.id)}
          />
          <label className={_.__answers_name} htmlFor={`${answer}`}>
            {answer}
          </label>
        </li>
      ))}
    </ul>
  );
}
