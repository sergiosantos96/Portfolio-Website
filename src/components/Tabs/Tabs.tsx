import { TabButton } from "./TabsButton";
import "./Tabs.scss";

interface TabsModel {
  selectedTab: string;
  handleTabChange: (tab: string) => void;
}

export const Tabs: React.FC<TabsModel> = ({ selectedTab, handleTabChange }) => {
  const tabData = [
    { key: "experience", text: "Work Experience" },
    { key: "education", text: "Education" },
    { key: "portfolio", text: "Portfolio" },
  ];

  return (
    <div className="tabs">
      {tabData.map(({ key, text }) => (
        <TabButton
          key={key}
          isActive={selectedTab === key}
          text={text}
          onClick={() => handleTabChange(key)}
        />
      ))}
    </div>
  );
};
