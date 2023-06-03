import "./Card.scss";

interface CardModel {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Card: React.FC<CardModel> = ({ title, description, children }) => {
  return (
    <div className="card">
      <div className="card__content">
        {children}
        <label className="card__title">{title}</label>
        <label className="card__description">{description}</label>
      </div>
    </div>
  );
};

export default Card;
