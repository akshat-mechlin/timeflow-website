import React from 'react';
import * as Icons from 'lucide-react';
import './FeatureCard.css';

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = Icons[icon];
  
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {IconComponent && <IconComponent size={28} />}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;