import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import logo from "../assets/lejhro_logo_white.png";
import "./css/section1.css";

function Navbar() {
  return (
  <>
   <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" ><img className=' w-50 ' src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link active text-light" >Innovations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light">Business Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" >Financial Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" >Bootcamp</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar
