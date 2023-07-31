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
      Button2: {
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
      Button3: {
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
      Button4: {
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
      Button5: {
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
  });

  const handleConfigChange = (target, config) => {
    setTooltipConfigs((prevConfigs) => ({
      ...prevConfigs,
      [target]: config,
    }));
  };

  return (
    <div className={styles.tooltipManagerContainer}>
      <div className={styles.formContainer}>
        <FormComponent onConfigChange={handleConfigChange} />
      </div>
      <div className={styles.mobileContainer}>
        <MobileComponent tooltipConfigs={tooltipConfigs} />
      </div>
    </div>
  );
};

export default TooltipManager;
