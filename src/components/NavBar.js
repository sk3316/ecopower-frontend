import React from 'react';
import { Link } from 'react-router-dom';
import SwitchButton from './SwitchButton';  // Import the SwitchButton component

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">EcoPower</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recommendations">Recommendations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search-charging">Find Charging Stations</Link>
            </li>
            {/* Add SwitchButton to the NavBar */}
            <li className="nav-item">
              <SwitchButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
