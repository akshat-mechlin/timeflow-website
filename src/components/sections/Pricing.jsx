import React from 'react';
import PricingCard from '../ui/PricingCard';
import { PRICING_PLANS } from '../../utils/constants';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your needs</p>
        </div>

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              popular={plan.popular}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;