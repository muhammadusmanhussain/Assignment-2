import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink className="lik" to="/"> Home </NavLink>
      <NavLink className="lik" to="/about"> About </NavLink>
      <NavLink className="lik" to="/profile"> Profile </NavLink>
      <NavLink className="lik" to="/login"> Login </NavLink>
    </div>
  );
};

export default Navbar;
