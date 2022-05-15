import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = (props) => {
  const {title , logoImage,firstName} = props;
  return (
    <div className="navbar">
      <ul className="flex-container" >
        <li>
          <Link to="/"><img src={logoImage} alt="Realtor logo" className="logo"></img></Link>
        </li>
        <div className="navbar-title">{title}</div>
        <li>
          <Link to="/profile">Welcome {firstName}</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
