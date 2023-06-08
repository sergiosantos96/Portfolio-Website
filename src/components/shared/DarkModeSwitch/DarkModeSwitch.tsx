import { useContext } from "react";
import { ThemeContext } from "../../../App";
import Switch from "react-switch";

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
