import React, { useState } from 'react';
import styles from './FormComponent.module.css';

const FormComponent = ({ onConfigChange }) => {
  const defaultConfig = {
    text: 'Default text for this button',
    textSize: '3',
    padding: '3',
    textColor: 'white',
    backgroundColor: 'black',
    cornerRadius: '3',
    tooltipWidth: '3',
    arrowWidth: '3',
    arrowHeight: '3',
  };

  const [targetElement, setTargetElement] = useState('');
  const [config, setConfig] = useState(defaultConfig);

  const handleTargetChange = (event) => {
    setTargetElement(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));

    // Emit the configuration to the parent component
    onConfigChange(targetElement, {
      ...config,
      [name]: value,
    });
  };

  const targetOptions = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];

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

      <div>
        <label htmlFor="tooltipText">Tooltip Text:</label>
        <input
          type="text"
          id="tooltipText"
          name="text"
          placeholder="Input"
          value={config.text}
          onChange={handleInputChange}
          className={styles['form-container__input']}
        />
      </div>
      <div className={`${styles['form-container__input-group--double']}`}>
        <div>
          <label htmlFor="textSize">Text Size:</label>
          <input
            type="number"
            id="textSize"
            name="textSize"
            placeholder="Input"
            value={config.textSize}
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
            value={config.padding}
            onChange={handleInputChange}
            className={styles['form-container__input']}
          />
        </div>
      </div>

      <div className={`${styles['form-container__input-group--single']}`}>
        <div>
          <label htmlFor="textColor">Text Color:</label>
          <input
            type="text"
            id="textColor"
            name="textColor"
            placeholder="Input"
            value={config.textColor}
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
            value={config.backgroundColor}
            onChange={handleInputChange}
            className={styles['form-container__input']}
          />
        </div>
      </div>

      <div className={`${styles['form-container__input-group--double']}`}>
        <div>
          <label htmlFor="cornerRadius">Corner Radius:</label>
          <input
            type="number"
            id="cornerRadius"
            name="cornerRadius"
            placeholder="Input"
            value={config.cornerRadius}
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
            value={config.tooltipWidth}
            onChange={handleInputChange}
            className={styles['form-container__input']}
          />
        </div>
      </div>

      <div className={`${styles['form-container__input-group--double']}`}>
        <div>
          <label htmlFor="arrowWidth">Arrow Width:</label>
          <input
            type="number"
            id="arrowWidth"
            name="arrowWidth"
            placeholder="Input"
            value={config.arrowWidth}
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
            value={config.arrowHeight}
            onChange={handleInputChange}
            className={styles['form-container__input']}
          />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
