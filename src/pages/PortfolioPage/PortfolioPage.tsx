import Card from "../../components/Card/Card";
import { Tabs } from "../../components/Tabs/Tabs";
import { useState } from "react";
import {
  educationCardData,
  experienceCardData,
} from "../../components/Card/CardData";
import ProjectsCard from "../../components/ProjectsCard/PortfolioCard";
import "./PortfolioPage.scss";

export const PortfolioPage = () => {
  const [selectedTab, setSelectedTab] = useState("experience");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="portfoliopage">
      <h2 className="portfoliopage__title">
        Education &
        <span className="portfoliopage__title__experience"> Experience</span>
      </h2>
      <Tabs selectedTab={selectedTab} handleTabChange={handleTabChange} />
      {selectedTab === "experience" && (
        <div className="portfoliopage__cards">
          {experienceCardData.map(
            (
              {
                name: companyName,
                logo: companyLogo,
                colorGradient,
                jobPosition,
                description: jobDescription,
                startDateAndStopDate,
              },
              index
            ) => (
              <Card
                key={index}
                name={companyName}
                logo={companyLogo}
                colorGradient={colorGradient}
                jobPosition={jobPosition}
                description={jobDescription}
                startDateAndStopDate={startDateAndStopDate}
              />
            )
          )}
        </div>
      )}

      {selectedTab === "education" && (
        <div className="portfoliopage__cards">
          {educationCardData.map(
            (
              {
                name: companyName,
                logo: companyLogo,
                colorGradient,
                degree,
                description: courseDescription,
                startDateAndStopDate,
              },
              index
            ) => (
              <Card
                key={index}
                name={companyName}
                logo={companyLogo}
                colorGradient={colorGradient}
                degree={degree}
                description={courseDescription}
                startDateAndStopDate={startDateAndStopDate}
              />
            )
          )}
        </div>
      )}
      {selectedTab === "portfolio" && <ProjectsCard />}
    </div>
  );
};
