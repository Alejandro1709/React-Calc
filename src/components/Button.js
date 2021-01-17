import React from 'react';

const Button = ({ title, controlBg, statusColor, onButtonClick }) => {
  return (
    <div
      className="cbut"
      style={{ backgroundColor: controlBg, color: statusColor }}
      onClick={() => onButtonClick(title)}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default Button;
