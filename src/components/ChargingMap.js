import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ChargingMap = ({ stations }) => {
  const defaultCenter = [51.505, -0.09]; // Default center (example coordinates)

  return (
    <div className="map-container">
      <MapContainer center={defaultCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Markers for Charging Stations */}
        {stations.map((station) => (
          <Marker key={station.id} position={[station.latitude, station.longitude]}>
            <Popup>
              <strong>{station.name}</strong><br />
              {station.address}<br />
              Distance: {station.distance}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ChargingMap;
