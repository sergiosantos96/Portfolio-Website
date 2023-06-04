import "./SkillCard.scss";

interface SkillsCardModel {
  title: string;
  description: string;
  children: React.ReactNode;
}

const SkillsCard: React.FC<SkillsCardModel> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="skillcard">
      <div className="skillcard__content">
        {children}
        <label className="skillcard__title">{title}</label>
        <label className="skillcard__description">{description}</label>
      </div>
    </div>
  );
};

export default SkillsCard;
