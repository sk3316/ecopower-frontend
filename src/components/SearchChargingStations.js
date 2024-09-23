import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchChargingStations = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [chargingStations, setChargingStations] = useState([]);
  const [searchType, setSearchType] = useState('ev'); // 'ev' for EV stations, 'laptop' for laptop charging points
  const [error, setError] = useState('');

  // Get the user's current location using Geolocation API
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError('Unable to retrieve your location.');
          console.error(error);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  }, []);

  // Search charging stations (dummy API or real external API)
  const searchChargingStations = () => {
    if (location.latitude && location.longitude) {
      // Dummy API call simulation
      const stations = [
        {
          id: 1,
          name: 'Super EV Charger Station',
          type: 'ev',
          distance: '2.5 km',
          address: '123 Green St, Eco City',
        },
        {
          id: 2,
          name: 'Laptop Power Hub',
          type: 'laptop',
          distance: '3.1 km',
          address: '456 Tech Ave, Power City',
        },
      ];

      // Filter based on search type (EV or laptop)
      const filteredStations = stations.filter(
        (station) => station.type === searchType
      );
      setChargingStations(filteredStations);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Find Nearby Charging Stations</h2>

      {/* Search Options */}
      <div className="d-flex justify-content-center my-4">
        <label htmlFor="searchType" className="me-2">Search for:</label>
        <select
          id="searchType"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="form-select w-auto"
        >
          <option value="ev">EV Charging Stations</option>
          <option value="laptop">Laptop Charging Points</option>
        </select>
      </div>

      <button className="btn btn-primary" onClick={searchChargingStations}>
        Find Charging Stations
      </button>

      {/* Display Charging Stations */}
      {error && <p className="text-danger mt-3">{error}</p>}
      {chargingStations.length > 0 ? (
        <div className="mt-4">
          <h4>Nearby {searchType === 'ev' ? 'EV Charging Stations' : 'Laptop Charging Points'}:</h4>
          <ul className="list-group">
            {chargingStations.map((station) => (
              <li key={station.id} className="list-group-item">
                <strong>{station.name}</strong>
                <p>{station.address}</p>
                <p>Distance: {station.distance}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-3">No charging stations found nearby.</p>
      )}
    </div>
  );
};

export default SearchChargingStations;
