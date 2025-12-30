import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, Check } from 'lucide-react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartTrial = () => {
    navigate('/start-trial');
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        {/* Left Side - Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Check size={16} />
            <span>Trusted by 50,000+ teams worldwide</span>
          </div>
          
          <h1 className="hero-title">
            Time Tracking Made <span className="gradient-text">Simple</span>
          </h1>
          
          <p className="hero-description">
            Track time, boost productivity, and manage your team efficiently with TimeFlow. 
            The modern time tracker designed for remote teams and freelancers.
          </p>
          
          <div className="hero-buttons">
            <Button 
              variant="primary" 
              size="large" 
              icon={<ArrowRight size={20} />}
              onClick={handleStartTrial}
            >
              Start Free Trial
            </Button>
            <Button variant="outline" size="large" icon={<Play size={20} />}>
              Watch Demo
            </Button>
          </div>
          
          <div className="hero-features">
            <div className="hero-feature">
              <Check size={18} />
              <span>No credit card required</span>
            </div>
            <div className="hero-feature">
              <Check size={18} />
              <span>14-day free trial</span>
            </div>
            <div className="hero-feature">
              <Check size={18} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        
        {/* Right Side - Dashboard Mockup */}
        <div className="hero-image">
          <div className="dashboard-mockup">
            {/* Mockup Header */}
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="mockup-title">Dashboard</div>
              <div className="mockup-actions"></div>
            </div>
            
            {/* Mockup Content */}
            <div className="mockup-content">
              {/* Stat Cards */}
              <div className="stat-cards">
                <div className="stat-card stat-card-1">
                  <div className="stat-icon">⏱️</div>
                  <div className="stat-info">
                    <p className="stat-label">Today's Hours</p>
                    <h3 className="stat-value">7h 32m</h3>
                    <p className="stat-change positive">+12% from yesterday</p>
                  </div>
                </div>
                
                <div className="stat-card stat-card-2">
                  <div className="stat-icon">📊</div>
                  <div className="stat-info">
                    <p className="stat-label">This Week</p>
                    <h3 className="stat-value">38h 15m</h3>
                    <p className="stat-change positive">+8% from last week</p>
                  </div>
                </div>
              </div>
              
              {/* Activity Section */}
              <div className="activity-section">
                <h4 className="activity-title">Recent Activity</h4>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <div className="activity-stats">
                  <span>75% Complete</span>
                  <span>6 tasks done</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Achievement Cards */}
          <div className="floating-element floating-1">
            <div className="mini-card">
              <div className="mini-icon">✓</div>
              <span>Task Completed</span>
            </div>
          </div>
          
          <div className="floating-element floating-2">
            <div className="mini-card">
              <div className="mini-icon">🎯</div>
              <span>Goal Achieved</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="hero-bg-decoration decoration-1"></div>
      <div className="hero-bg-decoration decoration-2"></div>
    </section>
  );
};

export default Hero;