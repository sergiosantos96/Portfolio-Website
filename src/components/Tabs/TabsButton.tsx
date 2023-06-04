import Button from "../shared/Button/Button";
import "./Tabs.scss";

type TabButtonProps = {
  isActive: boolean;
  text: string;
  onClick: () => void;
};

export const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  text,
  onClick,
}) => {
  return (
    <div className="tabs__tab">
      <Button
        className={`tabs__btn ${
          isActive ? "button tabs__tab-active" : "button"
        }`}
        text={text}
        onClick={onClick}
      ></Button>
    </div>
  );
};
