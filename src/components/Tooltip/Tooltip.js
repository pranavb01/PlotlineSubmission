import React from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ text, isVisible, position, width, height }) => {
  const tooltipStyles = {
    display: isVisible ? 'block' : 'none',
    top: position.y + 'px',
    left: position.x + 'px',
    width: width + 'px',
    height: height + 'px',
  };

  return (
    <div className={styles.tooltipContainer} style={tooltipStyles}>
      <div className={styles.tooltip} id="tooltip">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;



