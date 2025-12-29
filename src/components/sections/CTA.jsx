import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container cta-container">
        <h2>Ready to boost your productivity?</h2>
        <p>Join thousands of teams already using TimeFlow</p>
        <Button variant="white" size="large" icon={<ArrowRight size={20} />}>
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
};

export default CTA;