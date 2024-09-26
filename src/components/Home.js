import React from 'react';
import { Link } from 'react-router-dom';
import ChargingMap from './ChargingMap';
import SearchChargingStations from './SearchChargingStations';
import SwitchButton from './SwitchButton';
import './Home.css';

const Home = () => {
  // Dummy Data for Charging Stations (replace with real data or API call)
  const stations = [
    {
      id: 1,
      name: 'Super EV Charger Station',
      latitude: 51.505,
      longitude: -0.09,
      address: '123 Green St, Eco City',
      distance: '2.5 km',
    },
    {
      id: 2,
      name: 'Laptop Power Hub',
      latitude: 51.51,
      longitude: -0.1,
      address: '456 Tech Ave, Power City',
      distance: '3.1 km',
    },
    {
      id: 3,
      name: 'Eco Charging Point',
      latitude: 51.49,
      longitude: -0.08,
      address: '789 Future St, Clean City',
      distance: '1.8 km',
    },
  ];

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to EcoPower</h1>
        <p>Empowering you to switch to renewable energy and reduce your carbon footprint.</p>
        {/* <SwitchButton /> */}
      </section>

      {/* Search Charging Stations */}
      <section className="search-section">
        {/* <h2>Find Nearby Charging Stations</h2> */}
        <SearchChargingStations stations={stations} />
      </section>

      {/* Energy Savings Tips Section */}
      <section className="tips-section">
        <h2>Energy Savings Tips</h2>
        <ul className="tips-list">
          <li>Switch off appliances when not in use to save energy.</li>
          <li>Consider switching to renewable energy to reduce carbon emissions.</li>
          <li>Use energy-efficient light bulbs and appliances.</li>
          <li>Invest in solar panels to generate your own electricity.</li>
          <li>Drive an electric vehicle to reduce fuel consumption.</li>
        </ul>
      </section>

      {/* Latest News Section */}
      <section className="news-section">
        <h2>Latest News & Updates</h2>
        <div className="news-list">
          <div className="news-item">
            <h4>New Government Incentives for Solar Energy</h4>
            <p>The government is offering new incentives to promote solar energy adoption. Read more to find out how you can benefit.</p>
          </div>
          <div className="news-item">
            <h4>Top Renewable Energy Providers in Your Area</h4>
            <p>Find the best renewable energy providers available in your location. Compare their services and switch today!</p>
          </div>
        </div>
      </section>

      {/* Charging Stations Map Section */}
      
    </div>
  );
};

export default Home;
