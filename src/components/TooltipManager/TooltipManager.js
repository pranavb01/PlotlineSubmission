// src/components/TooltipManager.js
import React, { useState } from 'react';
import FormComponent from '../FormComponent/FormComponent';
import MobileComponent from '../MobileComponent/MobileComponent';
import styles from './TooltipManager.module.css'; // Import the CSS file for styling

const TooltipManager = () => {
  const [tooltipConfigs, setTooltipConfigs] = useState({
      Button1: {
        text: 'Default text for this button',
        textSize: 3,
        padding: 3,
        textColor: 'white',
        backgroundColor: 'black',
        cornerRadius: 3,
        tooltipWidth: 3,
        arrowWidth: 3,
        arrowHeight: 3,
      },
      // ... other default values for other buttons
  });

  const handleConfigChange = (target, config) => {
    console.log('handleConfigChange:', target, config);
    setTooltipConfigs((prevConfigs) => ({
      ...prevConfigs,
      [target]: config,
    }));
  };

  return (
    <div className={styles.tooltipManagerContainer}>
      <div className={styles.formComponentContainer}>
        <FormComponent onConfigChange={handleConfigChange} />
      </div>
      <div className={styles.mobileComponentContainer}>
        <MobileComponent tooltipConfigs={tooltipConfigs} />
      </div>
    </div>
  );
};

export default TooltipManager;
