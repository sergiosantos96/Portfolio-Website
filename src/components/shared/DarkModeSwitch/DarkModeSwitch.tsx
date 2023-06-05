import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../../App";

function DarkModeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <label className="darkmode">
      <Switch onChange={handleChange} checked={theme === "dark"} />
    </label>
  );
}

export default DarkModeSwitch;
