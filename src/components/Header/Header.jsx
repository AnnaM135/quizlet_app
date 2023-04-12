import { Languages } from "../LanguageSelect/Languages";
import { Logo } from "../Logo/Logo";
import _ from "./header.module.scss";

export default function Header() {
  return (
    <header className={_._}>
        <Logo />
        <Languages />
    </header>
  )
}
