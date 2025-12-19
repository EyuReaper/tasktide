import React from 'react';

const Button = ({ children, tooltipText, containerClassName = '', buttonClassName = '' }) => {
  return (
    <div className={`relative ${containerClassName}`}>
      {tooltipText ? (
        <div className="tooltip tooltip-bottom" data-tip={tooltipText}>
          <button className={`btn ${buttonClassName}`}>
            {children}
          </button>
        </div>
      ) : (
        <button className={`btn ${buttonClassName}`}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
