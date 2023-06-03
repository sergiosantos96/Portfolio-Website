import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import { ExperiencesPage } from "../pages/ExperiencesPage/ExperiencesPage";
import { PortfolioPage } from "../pages/PortfolioPage/PortfolioPage";
import "./Routes.scss";

export const PageRouter = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
};
