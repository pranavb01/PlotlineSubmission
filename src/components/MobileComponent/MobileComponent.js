import React, { useState, useEffect, useRef } from 'react';
import styles from './MobileComponent.module.css';
import Tooltip from '../Tooltip/Tooltip';

const MobileComponent = ({ tooltipConfigs }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });
  const [currentTarget, setCurrentTarget] = useState('');
  const mobileScreenRef = useRef(null);

  useEffect(() => {
    if (currentTarget && tooltipConfigs[currentTarget]) {
      const currentTargetConfig = tooltipConfigs[currentTarget];
      const tooltipText = currentTargetConfig.text || `Tooltip for ${currentTarget}`;
      setTooltipText(tooltipText);

      const buttonRect = mobileScreenRef.current.querySelector(`#${currentTarget}`).getBoundingClientRect();
      const mobileScreenRect = mobileScreenRef.current.getBoundingClientRect();

      const tooltipWidth = 200; // Adjust the width of the tooltip as needed

      let tooltipX;
      let tooltipY;
      let availableSpaceAbove = buttonRect.top - mobileScreenRect.top;
      let availableSpaceBelow = mobileScreenRect.bottom - buttonRect.bottom;
      let availableSpaceLeft = buttonRect.left - mobileScreenRect.left;
      let availableSpaceRight = mobileScreenRect.right - buttonRect.right;

      // Check if there is enough space below the button
      if (availableSpaceBelow >= 200) {
        tooltipX = buttonRect.left - mobileScreenRect.left + buttonRect.width / 2 - tooltipWidth / 2;
        tooltipY = buttonRect.bottom - mobileScreenRect.top + 10;
      }
      // Check if there is enough space above the button
      else if (availableSpaceAbove >= 200) {
        tooltipX = buttonRect.left - mobileScreenRect.left + buttonRect.width / 2 - tooltipWidth / 2;
        tooltipY = buttonRect.top - mobileScreenRect.top - 10;
      }
      // Check if there is enough space to the right of the button
      else if (availableSpaceRight >= tooltipWidth) {
        tooltipX = buttonRect.right - mobileScreenRect.left + 10;
        tooltipY = buttonRect.top - mobileScreenRect.top + buttonRect.height / 2 - 100;
      }
      // Check if there is enough space to the left of the button
      else if (availableSpaceLeft >= tooltipWidth) {
        tooltipX = buttonRect.left - mobileScreenRect.left - tooltipWidth - 10;
        tooltipY = buttonRect.top - mobileScreenRect.top + buttonRect.height / 2 - 100;
      }
      // If there is not enough space on any side, position the tooltip above the button
      else {
        tooltipX = buttonRect.left - mobileScreenRect.left + buttonRect.width / 2 - tooltipWidth / 2;
        tooltipY = buttonRect.top - mobileScreenRect.top - 10;
      }

      setTooltipVisible(true);
      setTooltipPosition({ x: tooltipX, y: tooltipY });
      setTooltipSize({ width: tooltipWidth, height: 200 }); // You can adjust the height as needed

      setTimeout(() => {
        setTooltipVisible(false);
      }, 5000);
    } else {
      // If the currentTarget is not available or invalid, hide the tooltip
      setTooltipVisible(false);
    }
  }, [tooltipConfigs, currentTarget]);

  const handleButtonClick = (event, text) => {
    setCurrentTarget(event.target.id);
    setTooltipText(text);
  };

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.mobileScreen} ref={mobileScreenRef} id="mobileScreen">
        <div className={styles.buttonTopRow}>
          <button
            id="Button1"
            className={styles.buttonTopLeft}
            onClick={(event) => {
              handleButtonClick(event, tooltipConfigs['Button1']?.text || `Tooltip for Button 1`);
            }}
          >
            Button 1
          </button>
          <button
            id="Button2"
            className={styles.buttonTopRight}
            onClick={(event) => {
              handleButtonClick(event, tooltipConfigs['Button2']?.text || `Tooltip for Button 2`);
            }}
          >
            Button 2
          </button>
        </div>
        <button
          id="Button3"
          className={styles.buttonCenter}
          onClick={(event) => {
            handleButtonClick(event, tooltipConfigs['Button3']?.text || `Tooltip for Button 3`);
          }}
        >
          Button 3
        </button>
        <div className={styles.buttonBottomRow}>
          <button
            id="Button4"
            className={styles.buttonBottomLeft}
            onClick={(event) => {
              handleButtonClick(event, tooltipConfigs['Button4']?.text || `Tooltip for Button 4`);
            }}
          >
            Button 4
          </button>
          <button
            id="Button5"
            className={styles.buttonBottomRight}
            onClick={(event) => {
              handleButtonClick(event, tooltipConfigs['Button5']?.text || `Tooltip for Button 5`);
            }}
          >
            Button 5
          </button>
        </div>
      </div>

      {tooltipVisible && (
        <Tooltip
          text={tooltipText}
          isVisible={tooltipVisible}
          position={tooltipPosition}
          width={tooltipSize.width}
          height={tooltipSize.height}
          backgroundColor={tooltipConfigs[currentTarget]?.backgroundColor || '#000000'}
        />
      )}
    </div>
  );
};

export default MobileComponent;
