import _ from "./logo.module.scss";
import LogoImg from "../../assets/images/logo.jpg";

export function Logo() {
  return (
    <div>
      <a className={_._} href="#">
        <img className={_.__img} src={LogoImg} alt="quizlet logo" />
        <span className={_.__name}>Quizlet</span>
      </a>
    </div>
  );
}
