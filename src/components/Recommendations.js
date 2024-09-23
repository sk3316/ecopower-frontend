import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  // Fetch providers from API on component mount
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/providers') // Replace with actual API
      .then((response) => {
        setProviders(response.data);
        setFilteredProviders(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Handle sorting providers
  const handleSort = (e) => {
    const sortOption = e.target.value;
    setSortOption(sortOption);

    let sortedProviders = [...filteredProviders];
    if (sortOption === 'costLowToHigh') {
      sortedProviders.sort((a, b) => a.cost - b.cost);
    } else if (sortOption === 'costHighToLow') {
      sortedProviders.sort((a, b) => b.cost - a.cost);
    } else if (sortOption === 'rating') {
      sortedProviders.sort((a, b) => b.rating - a.rating);
    }
    setFilteredProviders(sortedProviders);
  };

  // Handle filtering providers
  const handleFilter = (e) => {
    const filterOption = e.target.value;
    setFilterOption(filterOption);

    let filtered = [...providers];
    if (filterOption === 'lowCost') {
      filtered = filtered.filter((provider) => provider.cost < 50);
    } else if (filterOption === 'highRating') {
      filtered = filtered.filter((provider) => provider.rating >= 4);
    } else if (filterOption === 'highImpact') {
      filtered = filtered.filter((provider) => provider.environmental_impact === 'High');
    }
    setFilteredProviders(filtered);
  };

  // Handle favoriting a provider
  const handleFavorite = (providerId) => {
    console.log(`Provider ${providerId} added to favorites!`);
    // Logic to save the provider to user's favorites (API call or local state)
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Recommended Renewable Energy Providers</h2>

      {/* Sort and Filter Options */}
      <div className="d-flex justify-content-between mt-4 mb-3">
        <div>
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" value={sortOption} onChange={handleSort} className="form-select">
            <option value="">Select</option>
            <option value="costLowToHigh">Cost: Low to High</option>
            <option value="costHighToLow">Cost: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div>
          <label htmlFor="filter">Filter By:</label>
          <select id="filter" value={filterOption} onChange={handleFilter} className="form-select">
            <option value="all">All Providers</option>
            <option value="lowCost">Low Cost (under $50)</option>
            <option value="highRating">High Rating (4+)</option>
            <option value="highImpact">High Environmental Impact</option>
          </select>
        </div>
      </div>

      {/* Provider List */}
      <ul className="list-group">
        {filteredProviders.map((provider) => (
          <li key={provider._id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{provider.name}</strong>
                <p>Cost: ${provider.cost} per month</p>
                <p>Rating: {provider.rating} ★</p>
                <p>Environmental Impact: {provider.environmental_impact}</p>
              </div>
              <div>
                <button
                  className="btn btn-info"
                  onClick={() => alert(`Viewing details of ${provider.name}`)}
                >
                  View Details
                </button>
                <button
                  className="btn btn-warning ms-2"
                  onClick={() => handleFavorite(provider._id)}
                >
                  Add to Favorites
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
