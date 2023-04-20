import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { SelectLevel } from "../../components/SelectLevel/SelectLevel";
import DataContext from "../../context/DataContext";
import _ from "./homePage.module.scss";
import QuizImg from "../../assets/images/takeQuiz.png";

export function HomePage() {
  const { t } = useTranslation();
  const { isLoadingData } = useContext(DataContext)
  return (
    <main className={`${_._}`}>
      <section className={`${_.__left} ${ _.__main}`}>
          <img className={_.__main_img} src={QuizImg} alt="Take a quiz" />
          <h2 className={_.__main_text}>{t("encouraging")}</h2>
      </section>
      <section className={`${_.__right} ${ _.__main}`}>
          <h1 className={_.__title}>{t("greeting")}</h1>
          {isLoadingData && <SelectLevel />}
          
      </section>
    </main>
  );
}
