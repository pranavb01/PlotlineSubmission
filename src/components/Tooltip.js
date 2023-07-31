import React, { useEffect, useRef, useState } from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ targetElement, position, style, text }) => {
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const calculateTooltipPosition = () => {
      if (!targetElement || !targetElement.current) {
        return;
      }

      const targetRect = targetElement.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      switch (position) {
        case 'top':
          setTooltipPosition({
            top: targetRect.top - tooltipRect.height,
            left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
          });
          break;
        case 'right':
          setTooltipPosition({
            top: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2,
            left: targetRect.right,
          });
          break;
        case 'bottom':
          setTooltipPosition({
            top: targetRect.bottom,
            left: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
          });
          break;
        case 'left':
          setTooltipPosition({
            top: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2,
            left: targetRect.left - tooltipRect.width,
          });
          break;
        default:
          break;
      }
    };

    calculateTooltipPosition();

    const handleResize = () => {
      calculateTooltipPosition();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [targetElement, position]);

  return targetElement && targetElement.current ? (
    <div
      ref={tooltipRef}
      className={styles.tooltip}
      style={{
        ...style,
        position: 'absolute',
        display: 'inline-block',
        padding: '8px',
        borderRadius: '4px',
        backgroundColor: '#333',
        color: '#fff',
        pointerEvents: 'none',
        zIndex: 9999,
        ...tooltipPosition,
      }}
    >
      {text}
    </div>
  ) : null;
};

export default Tooltip;





