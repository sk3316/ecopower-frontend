import React, { useState } from 'react';
import ChargingMap from './ChargingMap';

const SearchChargingStations = () => {
  const [stations, setStations] = useState([
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
  ]);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Find Nearby Charging Stations</h2>

      {/* Map Display */}
      <ChargingMap stations={stations} />

      <div className="mt-4">
        <h4>Charging Stations List</h4>
        <ul className="list-group">
          {stations.map((station) => (
            <li key={station.id} className="list-group-item">
              <strong>{station.name}</strong><br />
              {station.address}<br />
              Distance: {station.distance}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchChargingStations;
