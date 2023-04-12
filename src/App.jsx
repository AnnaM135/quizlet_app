import "./assets/styles/styles.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/home/HomePage";
import { DataProvider } from "./context/DataContext";

function App() {

  return (
    <DataProvider>
      <div className="container">
        <Header />
        <HomePage />
      </div>
    </DataProvider>
  )
}

export default App
