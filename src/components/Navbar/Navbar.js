import "./Navbar.css";
import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary p-4">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" href="#">Hospital-Admine-Pro</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li className="nav-item ">
          <Link to ="/" className="nav-link active text-light" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link text-light" href="#">Contact</Link>
        </li>
      </ul>
      <Link to="/signup"> <p className="loginbtn"> Signup,login</p></Link>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
