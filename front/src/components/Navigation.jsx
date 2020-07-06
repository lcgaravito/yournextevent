import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../App";

export default function Navigation() {
  const userContext = useContext(SessionContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          <img
            src="logo-link-home.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="Cloud logo"
            loading="lazy"
          />
          YOUR NEXT EVENT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            {userContext.username ? (
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create
                </Link>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item">
              {userContext.username ? (
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
