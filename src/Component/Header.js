import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div id="brand">Developer Funnel</div>
        <div id="social">
          <Link to="/" className="btn btn-success">
            <span className="glyphicon glyphicon-log-in"></span>Login
          </Link>
          &nbsp
          <Link to="/" className="btn btn-danger">
            <span className="glyphicon glyphicon-user"></span>Signup
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
