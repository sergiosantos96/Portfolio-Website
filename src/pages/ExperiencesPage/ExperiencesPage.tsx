import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { experienceCardData } from "../../components/ExperienceCard/ExperienceCardData";
import "./ExperiencesPage.scss";

export const ExperiencesPage = () => {
  return (
    <div className="experiencespage">
      <h2 className="experiencespage__title">
        Education &
        <span className="experiencespage__title__experience"> Experience</span>
      </h2>
      <div className="experiencepage__cards">
        {experienceCardData.map(
          (
            {
              companyName,
              companyLogo,
              jobPosition,
              jobDescription,
              startDateAndStopDate,
            },
            index
          ) => (
            <ExperienceCard
              key={index}
              companyName={companyName}
              companyLogo={companyLogo}
              jobPosition={jobPosition}
              jobDescription={jobDescription}
              startDateAndStopDate={startDateAndStopDate}
            />
          )
        )}
      </div>
    </div>
  );
};
