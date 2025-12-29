import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { FEATURES } from '../../utils/constants';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Features</span>
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Track Time</span>
          </h2>
          <p className="section-description">
            Powerful features to help you and your team stay productive and achieve more in less time
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        <div className="features-extra">
          <h3 className="features-extra-title">And much more...</h3>
          <div className="features-extra-grid">
            <div className="extra-feature">
              <span className="extra-icon">🔔</span>
              <span>Smart Notifications</span>
            </div>
            <div className="extra-feature">
              <span className="extra-icon">📱</span>
              <span>Mobile & Desktop Apps</span>
            </div>
            <div className="extra-feature">
              <span className="extra-icon">📊</span>
              <span>Project Management</span>
            </div>
            <div className="extra-feature">
              <span className="extra-icon">📅</span>
              <span>Attendance Management</span>
            </div>
            <div className="extra-feature">
              <span className="extra-icon">📈</span>
              <span>Productivity Data</span>
            </div>
            <div className="extra-feature">
              <span className="extra-icon">🌙</span>
              <span>Dark Mode</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;