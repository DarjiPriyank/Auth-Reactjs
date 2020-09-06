import React, { useState, useEffect } from "react";
import "../App.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [token, setToken] = useState();
  useEffect(() => {
      setToken(localStorage.getItem('auth-token'))
    return () => {
        setToken();
    }
  }, [token])
  
  const logout = () => {
    setToken();
    localStorage.setItem("auth-token", "")
    console.log("logout");
  };
  return (
    <div className="header">
      <h2 className="logo">Hello world</h2>
      <div className="menu">
          <nav>
        {/* <Link to="/Home"className="link">Home</Link> */}
        <NavLink
          to="/Registration"
          className="link"
          activeClassName="link active"
        >
          Registration
        </NavLink>
        {token ? (
          <NavLink to="/login" onClick={logout} className="link">
            LogOut
          </NavLink>
        ) : (
          <NavLink to="/Login" className="link" activeClassName="active">
            Login
          </NavLink>
        )}</nav>
      </div>
    </div>
  );
}

export default Header;
