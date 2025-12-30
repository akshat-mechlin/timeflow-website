import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  onClick,
  icon,
  className = '',
  type = 'button'
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`.trim();
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      type={type}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;