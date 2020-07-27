import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <Link to="/" exact={true}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" exact={true}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" exact={true}>
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" exact={true}>
                profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
