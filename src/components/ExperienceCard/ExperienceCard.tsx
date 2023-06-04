import "./ExperienceCard.scss";
import { useEffect, useState } from "react";
export interface ExperienceCardModel {
  companyName: string;
  companyLogo: string;
  colorGradient: string;
  jobPosition: string;
  startDateAndStopDate: string;
  jobDescription: string;
}

const ExperienceCard: React.FC<ExperienceCardModel> = ({
  companyName,
  companyLogo,
  colorGradient,
  jobPosition,
  jobDescription,
  startDateAndStopDate,
}) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startDate = new Date(startDateAndStopDate.split(" - ")[0]);
    const interval = setInterval(() => {
      const diff = Date.now() - startDate.getTime();
      setElapsedTime(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [startDateAndStopDate]);

  const getElapsedTime = () => {
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    return {
      years,
      days: days % 365,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  };

  const { years, days, hours, minutes } = getElapsedTime();

  const cardStyle = {
    background: colorGradient ? `${colorGradient}` : "transparent",
  };

  return (
    <div className="experiencecard">
      <div className="experiencecard__gradient" style={cardStyle}></div>
      <div className="experiencecard__company">
        <label className="experiencecard__company__name">{companyName}</label>
        <img
          className="experiencecard__company__logo"
          src={companyLogo}
          alt="company-logo"
        />
        <label className="experiencecard__company__position">
          {jobPosition}
        </label>
        <label className="experiencecard__company__timer">
          {`${years} Years ${days} Days ${hours} Hours ${minutes} Minutes`}
        </label>
        <label className="experiencecard__company__date">
          {startDateAndStopDate}
        </label>
        <label className="experiencecard__company__description">
          {jobDescription}
        </label>
      </div>
    </div>
  );
};

export default ExperienceCard;
