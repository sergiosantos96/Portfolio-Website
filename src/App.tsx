import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import { ExperiencesPage } from "./components/ExperiencesPage/ExperiencesPage";
import { PortfolioPage } from "./components/PortfolioPage/PortfolioPage";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
