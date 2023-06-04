import DarkModeSwitch from "../shared/DarkModeSwitch/DarkModeSwitch";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./Footer.scss";
import { IconContext } from "react-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__divider"></div>
      <div className="footer__container">
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/svps2612/" target="_blank">
            <IconContext.Provider
              value={{
                size: "1.7em",
                color: "blue",
              }}
            >
              <BsLinkedin />
            </IconContext.Provider>
          </a>
          <a
            href="https://github.com/sergiosantos96/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider
              value={{
                size: "1.7em",
                color: "#FFB74D",
              }}
            >
              <FaGithub />
            </IconContext.Provider>
          </a>
        </div>
        <label>Copyright © Sérgio Santos🚀</label>
        <DarkModeSwitch />
      </div>
    </div>
  );
};
