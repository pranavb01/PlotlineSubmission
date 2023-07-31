// src/components/FormComponent/FormComponent.js
import React, { useState } from 'react';
import styles from './FormComponent.module.css';

const FormComponent = ({ onConfigChange }) => {
  const defaultConfig = {
    Button1: {
      text: 'Default text for Button 1',
      textSize: '16',
      padding: '8',
      textColor: '#ffffff',
      backgroundColor: '#000000',
      cornerRadius: '8',
      tooltipWidth: '200',
      arrowWidth: '5',
      arrowHeight: '5',
    },
    Button2: {
      text: 'Default text for Button 2',
      textSize: '16',
      padding: '8',
      textColor: '#ffffff',
      backgroundColor: '#000000',
      cornerRadius: '8',
      tooltipWidth: '200',
      arrowWidth: '5',
      arrowHeight: '5',
    },
    Button3: {
      text: 'Default text for Button 3',
      textSize: '16',
      padding: '8',
      textColor: '#ffffff',
      backgroundColor: '#000000',
      cornerRadius: '8',
      tooltipWidth: '200',
      arrowWidth: '5',
      arrowHeight: '5',
    },
    Button4: {
      text: 'Default text for Button 4',
      textSize: '16',
      padding: '8',
      textColor: '#ffffff',
      backgroundColor: '#000000',
      cornerRadius: '8',
      tooltipWidth: '200',
      arrowWidth: '5',
      arrowHeight: '5',
    },
    Button5: {
      text: 'Default text for Button 5',
      textSize: '16',
      padding: '8',
      textColor: '#ffffff',
      backgroundColor: '#000000',
      cornerRadius: '8',
      tooltipWidth: '200',
      arrowWidth: '5',
      arrowHeight: '5',
    },
  };

  const [targetElement, setTargetElement] = useState('');
  const [config, setConfig] = useState(defaultConfig);

  const handleTargetChange = (event) => {
    setTargetElement(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    event.persist(); // Add this line to persist the event object
    setConfig((prevConfig) => ({
      ...prevConfig,
      [targetElement]: {
        ...prevConfig[targetElement],
        [name]: value,
      },
    }));

    // Emit the configuration to the parent component
    onConfigChange(targetElement, {
      ...config[targetElement],
      [name]: value,
    });
  };

  const targetOptions = ['Button1', 'Button2', 'Button3', 'Button4', 'Button5'];

  return (
    <div className={styles['form-container']}>
      <div>
        <label htmlFor="targetElement">Target Element:</label>
        <select
          id="targetElement"
          value={targetElement}
          onChange={handleTargetChange}
          className={styles['form-container__select']}
        >
          <option value="">Select Target Element</option>
          {targetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {targetElement && (
        <div>
          <label htmlFor="tooltipText">Tooltip Text:</label>
          <input
            type="text"
            id="tooltipText"
            name="text"
            placeholder="Input"
            value={config[targetElement].text}
            onChange={handleInputChange}
            className={styles['form-container__input']}
          />
        </div>
      )}

      {targetElement && (
        <div className={`${styles['form-container__input-group--double']}`}>
          <div>
            <label htmlFor="textSize">Text Size:</label>
            <input
              type="number"
              id="textSize"
              name="textSize"
              placeholder="Input"
              value={config[targetElement].textSize}
              onChange={handleInputChange}
              className={styles['form-container__input']}
            />
          </div>

          <div>
            <label htmlFor="padding">Padding:</label>
            <input
              type="number"
              id="padding"
              name="padding"
              placeholder="Input"
              value={config[targetElement].padding}
              onChange={handleInputChange}
              className={styles['form-container__input']}
            />
          </div>
        </div>
      )}

      {targetElement && (
        <div className={`${styles['form-container__input-group--single']}`}>
          <div>
            <label htmlFor="textColor">Text Color:</label>
            <input
              type="text"
              id="textColor"
              name="textColor"
              placeholder="Input"
              value={config[targetElement].textColor}
              onChange={handleInputChange}
              className={styles['form-container__input']}
            />
          </div>

          <div>
            <label htmlFor="backgroundColor">Background Color:</label>
            <input
              type="text"
              id="backgroundColor"
              name="backgroundColor"
              placeholder="Input"
              value={config[targetElement].backgroundColor}
              onChange={handleInputChange}
              className={styles['form-container__input']}
            />
          </div>
        </div>
      )}

      {targetElement && (
        <div className={`${styles['form-container__input-group--double']}`}>
          <div>
            <label htmlFor="cornerRadius">Corner Radius:</label>
            <input
              type="number"
              id="cornerRadius"
              name="cornerRadius"
              placeholder="Input"
              value={config[targetElement].cornerRadius}
              onChange={handleInputChange}
              className={styles['form-container__input']}
            />
          </div>

          <div>
            <label htmlFor="tooltipWidth">Tooltip Width:</label>
            <input
              type="number"
              id="tooltipWidth"
              name="tooltipWidth"
              placeholder="Input"
              value={config[targetElement].tooltipWidth}
              onChange={handleInputChange}
              className={styles['form-container__input']}
            />
          </div>
        </div>
      )}

      {targetElement && (
        <div className={`${styles['form-container__input-group--double']}`}>
          <div>
            <label htmlFor="arrowWidth">Arrow Width:</label>
            <input
              type="number"
              id="arrowWidth"
              name="arrowWidth"
              placeholder="Input"
              value={config[targetElement].arrowWidth}
              onChange={handleInputChange}
              className={styles['form-container__input']}
            />
          </div>

          <div>
            <label htmlFor="arrowHeight">Arrow Height:</label>
            <input
              type="number"
              id="arrowHeight"
              name="arrowHeight"
              placeholder="Input"
              value={config[targetElement].arrowHeight}
              onChange={handleInputChange}
              className={styles['form-container__input']}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
