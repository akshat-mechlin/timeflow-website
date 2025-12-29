import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  onClick,
  icon,
  className = ''
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`;
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;  // ← Make sure this line exists!