import React from "react";

 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
 
// Here, we display our Navbar
const Navbar = () => {
    const {loginWithRedirect, logout, user, isLoading}= useAuth0();
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <NavLink className="navbar-brand" to="/">
          MongoDB
        </NavLink> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/grid">
                Grid
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/tapahtumat">
                Tapahtumat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Luo tapahtuma
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Käyttäjät
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adduser">
                Lisää käyttäjä
              </NavLink>
            </li>
            
            {!isLoading && !user && (
                <button 
                    className="btn btn-primary btn-block"
                    onClick={() => loginWithRedirect()}
                >
                    Log In
                </button>    
            )}
            {!isLoading && user && (
                <button 
                    className="btn btn-primary btn-block"
                    onClick={() => logout()}
                >
                    Log Out
                </button>    
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
 
export default Navbar;