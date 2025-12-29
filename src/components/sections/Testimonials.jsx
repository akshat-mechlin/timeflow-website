import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO at TechStart',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'TimeFlow has transformed how our team manages time. The intuitive interface and powerful features make tracking effortless. Highly recommended!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Project Manager at DevCorp',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'Best time tracking tool we\'ve ever used! The reports are incredibly detailed and help us understand our productivity patterns.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Freelance Designer',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      text: 'As a freelancer, TimeFlow helps me bill clients accurately and manage multiple projects seamlessly. It\'s a game-changer!'
    },
    {
      id: 4,
      name: 'David Park',
      position: 'CTO at Innovation Labs',
      image: 'https://randomuser.me/api/portraits/men/86.jpg',
      rating: 5,
      text: 'The team management features are outstanding. We can monitor productivity without being intrusive. Perfect balance!'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      position: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      rating: 5,
      text: 'TimeFlow integrates perfectly with our workflow. The mobile app is fantastic, and customer support is top-notch!'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Startup Founder',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
      rating: 5,
      text: 'From day one, TimeFlow has been essential to our operations. It scales beautifully as our team grows. Love it!'
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it - hear from some of our amazing customers who are using TimeFlow to boost their productivity
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="quote-icon">
                <Quote size={32} />
              </div>
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-avatar"
                  loading="lazy"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat-box">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-box">
            <h3>10,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-box">
            <h3>50,000+</h3>
            <p>5-Star Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;