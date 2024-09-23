import React, { useState, useEffect } from 'react';

const Geolocation = ({ onLocationFound }) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          onLocationFound(latitude, longitude); // Pass to parent component
        },
        (err) => setError(err.message)
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, [onLocationFound]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        location.latitude && <p>Location: {location.latitude}, {location.longitude}</p>
      )}
    </div>
  );
};

export default Geolocation;
