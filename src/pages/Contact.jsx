import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  User,
  Building2,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      details: 'hello@timeflow.com',
      subtext: 'We reply within 24 hours',
      link: 'mailto:hello@timeflow.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      details: '+1 (234) 567-890',
      subtext: 'Mon-Fri from 9am to 6pm',
      link: 'tel:+1234567890'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      details: '123 TimeFlow Street',
      subtext: 'San Francisco, CA 94102',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 - 18:00',
      subtext: 'Weekend: Closed',
      link: null
    }
  ];

  const faqs = [
    {
      question: 'How quickly do you respond?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes! Phone support is available for all paid plans during business hours.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Absolutely! Use the contact form to request a personalized demo of TimeFlow.'
    }
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, name: 'Twitter', url: 'https://twitter.com/timeflow' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: 'https://instagram.com/timeflow' },
    { icon: <Youtube size={20} />, name: 'YouTube', url: 'https://youtube.com/@timeflow' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: 'https://linkedin.com/company/timeflow' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="contact-badge">Get in Touch</span>
            <h1>We'd Love to <span className="gradient-text">Hear From You</span></h1>
            <p>
              Have questions? Want to learn more about TimeFlow? Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="contact-info-details">
                    {info.details}
                  </a>
                ) : (
                  <p className="contact-info-details">{info.details}</p>
                )}
                <p className="contact-info-subtext">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header-contact">
                <MessageSquare size={40} />
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {isSubmitted && (
                <div className="success-alert">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>We've received your message and will get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={18} />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={18} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">
                      <Building2 size={18} />
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <MessageSquare size={18} />
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={errors.subject ? 'error' : ''}
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <MessageSquare size={18} />
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large btn-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar">
              {/* FAQs */}
              <div className="sidebar-card">
                <h3>Quick Answers</h3>
                <div className="faqs-list">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <h4>{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="sidebar-card">
                <h3>Connect With Us</h3>
                <p className="social-text">Follow us on social media for updates and tips</p>
                <div className="social-links-contact">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-contact"
                      aria-label={social.name}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Support Hours */}
              <div className="sidebar-card support-hours">
                <Clock size={32} />
                <h3>Support Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be replaced with real map) */}
      <section className="contact-map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-placeholder">
              <MapPin size={64} />
              <h3>Visit Our Office</h3>
              <p>123 TimeFlow Street, San Francisco, CA 94102</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;