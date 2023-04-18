import _ from "./result.module.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

import Videographer from "../../assets/images/result/videographer.svg"
import Photographer from "../../assets/images/result/photographer.svg"

export function Result() {
    const {selectedTopic, selectedLevel, totalQuestions, result, playAgain, backToHome} = useContext(DataContext);
    
    return (
    <div className={_._}>
        <h4 className={_.__salutation}>Congratulation</h4>
        <h2 className={_.__title}>Level: {selectedLevel}</h2>
        <h2 className={_.__title}>Category: {selectedTopic}</h2>
        <h4 className={_.__salutation_score}>Your quiz score is {result.score}</h4>
        <div className={_.__content}>
            <img className={_.__content_img} src={Videographer} alt="Videographer fixed your result " />
            <div className={_.__content_information}>
                <span className={_.__content_title}>You answared</span>
                <span className={_.__content_score}>{result.correctAnswers} / {totalQuestions}</span>
                <span className={_.__content_title}>question correct</span>
            </div>
            <img className={_.__content_img} src={Photographer} alt="Photographer fixed your result" />
        </div>
        <div className={_.__buttons}>
            <button className="filled_button" onClick={playAgain}>Play Again</button>
            <button className={`filled_button ${_.__transparent_button}`} onClick={backToHome}>Back to Home</button>
        </div>
    </div>
  )
}
