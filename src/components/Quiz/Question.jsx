import _ from "../../pages/quiz/quizContent.module.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

export function Question() {
  const { question } = useContext(DataContext);

  return <h3 className={_.__title}>{question}</h3>;
}
