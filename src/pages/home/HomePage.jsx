import _ from "./homePage.module.scss";
import QuizImg from "../../assets/images/takeQuiz.png";

export default function HomePage() {
  return (
    <main className={`${_._}`}>
      <section className={`${_.__left} ${ _.__main}`}>
          <img className={_.__main_img} src={QuizImg} alt="Take a quiz" />
          <h2 className={_.__main_text}>
            Take a Quiz be more creative in your work
          </h2>
      </section>
      <section className={`${_.__right} ${ _.__main}`}>
          <h1 className={_.__title}>Welcome to Quizlet</h1>
          {/* Choose Level Component */}
      </section>
    </main>
  );
}
