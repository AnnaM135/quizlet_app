import _ from "./languages.module.scss";
import FlagRu from "../../assets/images/flag_ru.png"
import FlagEn from "../../assets/images/flag_en.png"
import Arrow from "../../assets/images/arrow.svg"

export function Languages() {
  return (
    <div className={_._}>
        <ul className={_.__selector}>
            <li className={_.__selector_country} value="en">
                <img className={_.__selector_flag} src={FlagEn} alt="select the language English" />
                <span className={_.__selector_name}>English</span>
                <img className={_.__selector_arrow} src={Arrow} alt="select the language" />
            </li>
        </ul>
    </div>
  )
}
