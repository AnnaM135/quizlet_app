import "./assets/styles/styles.scss";
import Header from "./components/Header/Header";
import {HomePage} from "./pages/home/HomePage";
import { DataProvider } from "./context/DataContext";
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { QuizWrapper } from "./pages/QuizWrapper";

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <DataProvider>
        <div className="container">
          <Header />
          <QuizWrapper />
        </div>
      </DataProvider>
    </I18nextProvider>

  )
}

export default App
