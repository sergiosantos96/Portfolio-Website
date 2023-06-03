import { DarkModeSwitch } from "../shared/DarkModeSwitch/DarkModeSwitch";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <label className="navbar__name">Sérgio</label>
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
            to="/experiences"
          >
            Experiences
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
