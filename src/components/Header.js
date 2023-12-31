import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favoris"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Coups de Coeur
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>App Cinéma by Max</h1>
    </div>
  );
};

export default Header;
