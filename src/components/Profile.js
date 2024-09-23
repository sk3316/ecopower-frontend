import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    energyPreferences: '',
    energyConsumption: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPreferences, setUpdatedPreferences] = useState('');

  useEffect(() => {
    // Fetch user profile data (assuming user is already authenticated)
    axios
      .get('http://localhost:5000/api/users/profile') // Update with actual user API
      .then((response) => {
        setUserData(response.data);
        setUpdatedPreferences(response.data.energyPreferences);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSave = () => {
    // Save updated preferences
    axios
      .put('http://localhost:5000/api/users/profile', { energyPreferences: updatedPreferences })
      .then((response) => {
        setUserData(response.data);
        setIsEditing(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Profile</h2>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Personal Information</h5>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <hr />
          <h5 className="card-title">Energy Preferences</h5>
          {isEditing ? (
            <div>
              <textarea
                className="form-control"
                value={updatedPreferences}
                onChange={(e) => setUpdatedPreferences(e.target.value)}
              />
              <button className="btn btn-primary mt-3" onClick={handleSave}>
                Save Preferences
              </button>
              <button className="btn btn-secondary mt-3" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p>{userData.energyPreferences}</p>
              <button className="btn btn-warning" onClick={() => setIsEditing(true)}>
                Edit Preferences
              </button>
            </div>
          )}
          <hr />
          <h5 className="card-title">Energy Consumption</h5>
          <p>{userData.energyConsumption} kWh</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
