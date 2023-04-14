import { useContext } from "react";
import DataContext from "../../context/DataContext";
import _ from "./quizContent.module.scss";


export function QuizContext() {
  const { selectedTopic } = useContext(DataContext)

  return (
    <div>
        <h2>Your Topic is ` {selectedTopic}</h2>
    </div>
  )
}
