import React from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
  <div className="logo"><i className="fas fa-2x fa-star-of-life"></i></div>
    <a className="navbar-brand" href="#"> Doctor e-clinics</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="navMenu">
        <i class="fas fa-stethoscope"></i>
          <a className=" findDoctor active" href="#">Find a Doctor</a>
        </li>
        <li className="navMenu">
        <i class="far fa-clock"></i>
          <a className=" Appointments active" href="#">Appointments</a>
        </li>
        <li className="navMenu nav-rigt">
        <i class="far fa-comment"></i>
          <a className=" ChatDoctor active" href="#">Chat with Doctor</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
