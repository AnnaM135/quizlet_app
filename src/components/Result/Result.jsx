import { useContext } from "react";
import { useTranslation } from "react-i18next";
import DataContext from "../../context/DataContext";

import _ from "./result.module.scss";
import Videographer from "../../assets/images/result/videographer.svg"
import Photographer from "../../assets/images/result/photographer.svg"

export function Result() {
    const { t } = useTranslation();
    const {selectedTopic, selectedLevel, totalQuestions, result, playAgain, backToHome} = useContext(DataContext);
    
    return (
    <div className={_._}>
        <h4 className={_.__salutation}>{t("congratulation")}</h4>
        <h2 className={_.__title}>Level: {selectedLevel}</h2>
        <h2 className={_.__title}>Category: {selectedTopic}</h2>
        <h4 className={_.__salutation_score}>{t("score")} {result.score}</h4>
        <div className={_.__content}>
            <img className={_.__content_img} src={Videographer} alt="Videographer fixed your result " />
            <div className={_.__content_information}>
                <span className={_.__content_title}>{t("answered")}</span>
                <span className={_.__content_score}>{result.correctAnswers} / {totalQuestions}</span>
                <span className={_.__content_title}>{t("correct")}</span>
            </div>
            <img className={_.__content_img} src={Photographer} alt="Photographer fixed your result" />
        </div>
        <div className={_.__buttons}>
            <button className="filled_button" onClick={playAgain}>{t("playAgain")}</button>
            <button className={`filled_button ${_.__transparent_button}`} onClick={backToHome}>{t("backToHome")}</button>
        </div>
    </div>
  )
}
