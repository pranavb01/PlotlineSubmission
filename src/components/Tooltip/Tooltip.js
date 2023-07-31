import React, { useRef, useEffect, useState } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ text, isVisible, position, backgroundColor }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipWidth, setTooltipWidth] = useState(0);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setTooltipVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (tooltipVisible && tooltipRef.current) {
      const width = tooltipRef.current.offsetWidth;
      setTooltipWidth(width);
    }
  }, [tooltipVisible, text]);

  const tooltipStyles = {
    display: tooltipVisible ? 'block' : 'none',
    top: position.y + 'px',
    left: position.x + 'px',
    width: tooltipWidth + 'px',
    backgroundColor: backgroundColor || '#000000',
  };

  return (
    <div className={styles.tooltipContainer} style={tooltipStyles}>
      <div ref={tooltipRef} className={styles.tooltip} id="tooltip">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
