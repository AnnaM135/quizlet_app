import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Categories } from "./categories/Categories";
import { HomePage } from './home/HomePage'
import { QuizContext } from "./quiz/QuizContext";

export function QuizWrapper() {
  const { isLoadingData, loadingQuiz } = useContext(DataContext)

  return (
    <>
        {isLoadingData ? (
          <HomePage />
        ) : loadingQuiz ? (
          <QuizContext />
        ) : (
          <Categories />
        )
    }
    </>
  )
}
