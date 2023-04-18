import { useContext } from "react";
import DataContext from "../../context/DataContext";
import _ from "./quizContent.module.scss";
import { Question } from "../../components/Quiz/Question";
import { Answers } from "../../components/Quiz/Answers";
import { NextButton } from "../../components/Quiz/NextButton";
import { Result } from "../../components/Result/Result";

export function QuizContext() {
  const { selectedTopic, activeStep, totalQuestions, showResult } =
    useContext(DataContext);

  return (
    <div className={_._}>
      {showResult ? (
        <Result />
      ) : (
        <>
          <h2 className={_.__title}>Category: {selectedTopic}</h2>
          <span className={_.__questions_count}>
            {activeStep + 1} / {totalQuestions}
          </span>
          <Question />
          <Answers />
          <NextButton />
        </>
      )}
    </div>
  );
}
