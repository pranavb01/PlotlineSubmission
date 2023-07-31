import React, { useState } from 'react';
import FormComponent from './components/FormComponent/FormComponent';
import MobileComponent from './components/MobileComponent/MobileComponent';

const App = () => {
  const [tooltipConfigs, setTooltipConfigs] = useState({});
  const [currentTarget, setCurrentTarget] = useState('');

  // Callback function to update tooltip configurations
  const handleConfigChange = (targetElement, config) => {
    setTooltipConfigs((prevConfigs) => ({
      ...prevConfigs,
      [targetElement]: config,
    }));
  };

  // Callback function to update the current target button
  const handleTargetChange = (event) => {
    setCurrentTarget(event.target.value);
  };

  return (
    <div>
      <FormComponent
        onConfigChange={handleConfigChange}
        onTargetChange={handleTargetChange}
        currentTarget={currentTarget}
        tooltipConfigs={tooltipConfigs}
      />
      <MobileComponent tooltipConfigs={tooltipConfigs} currentTarget={currentTarget} />
    </div>
  );
};

export default App;


