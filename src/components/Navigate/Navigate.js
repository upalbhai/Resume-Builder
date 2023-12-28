import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigate.css";
function Navigate() {
  return (
    <div className="topnav" classID="myTopnav">
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/Contactus">Contact Us</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default Navigate;
