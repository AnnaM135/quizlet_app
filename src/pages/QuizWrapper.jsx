import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Categories } from "./categories/Categories";
import { HomePage } from './home/HomePage'

export function QuizWrapper() {
  const { isLoadingData } = useContext(DataContext)

  return (
    <>
        {isLoadingData ? (
            <HomePage />

        ) : (
            <Categories />
        )
    }
    </>
  )
}
