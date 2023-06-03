import "./ExperienceCard.scss";

export interface ExperienceCardModel {
  companyName: string;
  companyLogo: string;
  colorGradient?: React.CSSProperties;
  jobPosition: string;
  timer?: number;
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
  timer,
}) => {
  return (
    <div className="experiencecard">
      <div className="experiencecard__gradient" style={colorGradient}></div>
      <div className="experiencecard__company">
        <label className="experiencecard__company__name">{companyName}</label>
        <label className="experiencecard__company__logo">{companyLogo}</label>
        <label className="experiencecard__company__position">
          {jobPosition}
        </label>
        <label className="experiencecard__company__timer">{timer}</label>
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
