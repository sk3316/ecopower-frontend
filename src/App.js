import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';  // Updated Home component
import Recommendations from './components/Recommendations';
import Profile from './components/Profile';
import SwitchingProcess from './components/SwitchingProcess';
import SearchChargingStations from './components/SearchChargingStations';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* New Home route */}
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/switching-process" element={<SwitchingProcess />} />
        <Route path="/search-charging" element={<SearchChargingStations />} />
      </Routes>
    </Router>
  );
}

export default App;
