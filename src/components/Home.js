import React from 'react';
import SwitchButton from './SwitchButton';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Welcome to EcoPower</h1>
      <p className="text-center">Find renewable energy solutions!</p>
      <SwitchButton />
    </div>
  );
};

export default Home;
