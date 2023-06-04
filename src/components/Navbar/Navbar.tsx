import { NavLink } from "react-router-dom";
import DarkModeSwitch from "../shared/DarkModeSwitch/DarkModeSwitch";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <label className="navbar__name">
        <span className="navbar__initial">S</span>
        érgio
      </label>
      <ul className="navbar__list">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar__link-active" : "navbar__link"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar__link-active" : "navbar__link"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar__link-active" : "navbar__link"
            }
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <DarkModeSwitch />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
