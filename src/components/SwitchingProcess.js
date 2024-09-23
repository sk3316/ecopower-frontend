import React, { useState } from 'react';

const SwitchingProcess = () => {
  const [step, setStep] = useState(1);
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [providers, setProviders] = useState([
    { id: 1, name: 'Green Energy Co.', cost: 50, benefits: 'Reduce carbon emissions by 30%' },
    { id: 2, name: 'Solar Future', cost: 45, benefits: 'Save $100 annually with solar energy' },
    { id: 3, name: 'Wind Power Inc.', cost: 60, benefits: '100% renewable wind energy' },
  ]);

  // Handle energy consumption input change
  const handleEnergyConsumptionChange = (e) => {
    setEnergyConsumption(e.target.value);
  };

  // Proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle provider selection
  const handleProviderSelection = (provider) => {
    setSelectedProvider(provider);
    nextStep();
  };

  // Render different steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3>Step 1: Enter your energy consumption</h3>
            <p>Please enter your current energy consumption (in kWh):</p>
            <input
              type="number"
              value={energyConsumption}
              onChange={handleEnergyConsumptionChange}
              placeholder="Enter energy consumption"
              className="form-control"
            />
            <button className="btn btn-primary mt-3" onClick={nextStep} disabled={!energyConsumption}>
              Next: Compare Providers
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Step 2: Compare Renewable Energy Providers</h3>
            <p>Based on your energy consumption, here are some available renewable energy providers:</p>
            <ul className="list-group">
              {providers.map((provider) => (
                <li key={provider.id} className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>{provider.name}</strong>
                      <p>Cost: ${provider.cost} per month</p>
                      <p>Benefits: {provider.benefits}</p>
                    </div>
                    <button
                      className="btn btn-success"
                      onClick={() => handleProviderSelection(provider)}
                    >
                      Select
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button className="btn btn-secondary mt-3" onClick={prevStep}>
              Back: Energy Consumption
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Step 3: Confirm Your Selection</h3>
            <p>You have selected <strong>{selectedProvider.name}</strong> as your new renewable energy provider.</p>
            <p>Cost: ${selectedProvider.cost} per month</p>
            <p>Benefits: {selectedProvider.benefits}</p>
            <p>
              Switching to this provider will help reduce your carbon footprint and save on your energy
              bill.
            </p>
            <button className="btn btn-primary mt-3" onClick={nextStep}>
              Confirm and Switch
            </button>
            <button className="btn btn-secondary mt-3" onClick={prevStep}>
              Back: Compare Providers
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Step 4: Switch Completed</h3>
            <p>
              Congratulations! You have successfully switched to <strong>{selectedProvider.name}</strong> as your new energy provider.
            </p>
            <p>Your new energy plan will take effect starting next month. You will receive further updates from the provider soon.</p>
            <button className="btn btn-success mt-3" onClick={() => setStep(1)}>
              Go to Home
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Switch to Renewable Energy</h2>
      <div className="card p-4">
        {renderStep()}
      </div>
    </div>
  );
};

export default SwitchingProcess;
