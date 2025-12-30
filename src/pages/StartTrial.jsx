import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  Building2, 
  Users, 
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Clock
} from 'lucide-react';
import './StartTrial.css';

const StartTrial = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    teamSize: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.teamSize) {
      newErrors.teamSize = 'Please select team size';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - submit data
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Here you would typically send data to your backend
      // Example: await api.createAccount(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const benefits = [
    { icon: <CheckCircle size={20} />, text: '14-day free trial' },
    { icon: <CheckCircle size={20} />, text: 'No credit card required' },
    { icon: <CheckCircle size={20} />, text: 'Full access to all features' },
    { icon: <CheckCircle size={20} />, text: 'Cancel anytime' },
    { icon: <CheckCircle size={20} />, text: '24/7 customer support' },
    { icon: <CheckCircle size={20} />, text: 'Free onboarding session' }
  ];

  const features = [
    { icon: <Clock size={24} />, title: 'Time Tracking', description: 'Automatic and manual time tracking' },
    { icon: <Users size={24} />, title: 'Team Management', description: 'Manage unlimited team members' },
    { icon: <Shield size={24} />, title: 'Secure & Private', description: 'Enterprise-grade security' },
    { icon: <Zap size={24} />, title: 'Real-time Reports', description: 'Instant productivity insights' }
  ];

  if (isSubmitted) {
    return (
      <div className="start-trial-page">
        <section className="success-section">
          <div className="container">
            <div className="success-content">
              <div className="success-icon">
                <CheckCircle size={80} />
              </div>
              <h1>Welcome to TimeFlow! 🎉</h1>
              <p className="success-message">
                Your account has been created successfully. We've sent a confirmation email to <strong>{formData.email}</strong>
              </p>
              <div className="success-steps">
                <h3>What's Next?</h3>
                <div className="steps-grid">
                  <div className="step">
                    <span className="step-number">1</span>
                    <p>Check your email and verify your account</p>
                  </div>
                  <div className="step">
                    <span className="step-number">2</span>
                    <p>Complete your profile setup</p>
                  </div>
                  <div className="step">
                    <span className="step-number">3</span>
                    <p>Start tracking time and boost productivity!</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-large">
                Go to Dashboard <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="start-trial-page">
      {/* Hero Section */}
      <section className="trial-hero">
        <div className="container">
          <div className="trial-hero-content">
            <h1>Start Your Free 14-Day Trial</h1>
            <p>No credit card required. Get full access to all features.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="trial-content section">
        <div className="container">
          <div className="trial-grid">
            {/* Form Section */}
            <div className="trial-form-wrapper">
              <div className="form-header">
                <h2>Create Your Account</h2>
                <p>Join 50,000+ teams already using TimeFlow</p>
              </div>

              <form onSubmit={handleSubmit} className="trial-form">
                <div className="form-group">
                  <label htmlFor="fullName">
                    <User size={18} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.fullName ? 'error' : ''}
                  />
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={18} />
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="company">
                    <Building2 size={18} />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className={errors.company ? 'error' : ''}
                  />
                  {errors.company && <span className="error-message">{errors.company}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="teamSize">
                    <Users size={18} />
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className={errors.teamSize ? 'error' : ''}
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-25">11-25 people</option>
                    <option value="26-50">26-50 people</option>
                    <option value="51-100">51-100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                  {errors.teamSize && <span className="error-message">{errors.teamSize}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <Lock size={18} />
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="At least 8 characters"
                    className={errors.password ? 'error' : ''}
                  />
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    <Lock size={18} />
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className={errors.confirmPassword ? 'error' : ''}
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                    />
                    <span>
                      I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                    </span>
                  </label>
                  {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-large btn-full">
                  Start Free Trial <ArrowRight size={20} />
                </button>

                <p className="form-footer">
                  Already have an account? <a href="/login">Sign In</a>
                </p>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="trial-benefits">
              <div className="benefits-card">
                <h3>What's Included</h3>
                <ul className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <li key={index}>
                      {benefit.icon}
                      <span>{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="features-preview">
                <h3>Key Features</h3>
                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item-trial">
                      <div className="feature-icon-trial">{feature.icon}</div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="trust-badges">
                <p className="trust-text">Trusted by teams at</p>
                <div className="badges">
                  <span className="badge">🏢 Tech Startups</span>
                  <span className="badge">🎨 Creative Agencies</span>
                  <span className="badge">💼 Consultants</span>
                  <span className="badge">🚀 Remote Teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartTrial;