import { useEffect, useState } from "react";
import "./Card.scss";
export interface CardModel {
  cardName: string;
  cardLogo: string;
  colorGradient: string;
  jobPosition?: string;
  degree?: string;
  startDateAndStopDate: string;
  description: string;
}

const Card: React.FC<CardModel> = ({
  cardName,
  cardLogo,
  colorGradient,
  degree,
  jobPosition,
  description,
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
    };
  };

  const { years, days, hours, minutes } = getElapsedTime();

  const cardStyle = {
    background: colorGradient,
  };

  return (
    <div className="card">
      <div className="card__gradient" style={cardStyle}></div>
      <div className="card__institution">
        <label className="card__institution__name">{cardName}</label>
        <img
          className="card__institution__logo"
          src={cardLogo}
          alt="institution-logo"
        />
        <label className="card__institution__position">{jobPosition}</label>
        <label className="card__institution__position">{degree}</label>
        <label className="card__institution__timer">
          {`${years} Years ${days} Days ${hours} Hours ${minutes} Minutes`}
        </label>
        <label className="card__institution__date">
          {startDateAndStopDate}
        </label>
        <label className="card__institution__description">{description}</label>
      </div>
    </div>
  );
};

export default Card;
