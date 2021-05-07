import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../resources/css/Navbar.css";

import { useAuth } from "../authentication/context/AuthContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();

  const handleClick = () => setClick(!click);

  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to Logout");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {error}
          <NavLink exact to="/" className="nav-logo">
            <div className="navSection">
              <h2>Spatikal</h2>
            </div>
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
                onClick={handleClick}
              >
                <span>About Us</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                className="nav-links"
                onClick={handleClick}
              >
                <span>Blog</span>
              </NavLink>
            </li>
            {/* {currentUser ? (
              <li className="nav-item">
                <span className="nav-links pointer" onClick={handleLogout}>
                  <span>
                    Logout
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </span>
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <span>
                    Login
                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </span>
                </NavLink>
              </li>
            )} */}
            {/* <NavLink
              exact
              to="/post"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <span>
                Post
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              </span>
            </NavLink> */}
            {/* <li className="nav-search nav-item">
                            <i className="fa fa-search" aria-hidden="true" onFocus={handleClick}></i>
                            {click ? <input className="nav-searchinput" placeholder="Search…"/> : null}
                        </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
