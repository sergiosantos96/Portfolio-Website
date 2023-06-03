import { DarkModeSwitch } from "../shared/DarkModeSwitch/DarkModeSwitch";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <label className="navbar__name">Sérgio</label>
      <ul className="navbar__list">
        <li>
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/experiences">
            Experiences
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <DarkModeSwitch />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
