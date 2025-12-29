import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import './PricingCard.css';

const PricingCard = ({ name, price, period, popular, features }) => {
  return (
    <div className={`pricing-card ${popular ? 'featured' : ''}`}>
      {popular && <div className="popular-badge">Most Popular</div>}
      
      <h3 className="pricing-name">{name}</h3>
      
      <div className="price">
        {typeof price === 'number' ? (
          <>
            <span className="currency">$</span>
            <span className="amount">{price}</span>
            <span className="period">{period}</span>
          </>
        ) : (
          <span className="amount">{price}</span>
        )}
      </div>
      
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <Check size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={popular ? 'primary' : 'outline'} 
        fullWidth
      >
        {name === 'Enterprise' ? 'Contact Sales' : name === 'Free' ? 'Get Started' : 'Start Free Trial'}
      </Button>
    </div>
  );
};

export default PricingCard;