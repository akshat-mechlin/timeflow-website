import React from 'react';
import { 
  Target, 
  Users, 
  Heart, 
  Award, 
  Clock, 
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle
} from 'lucide-react';
import './About.css';

const About = () => {
  const values = [
    {
      id: 1,
      icon: <Target size={32} />,
      title: 'Mission Driven',
      description: 'We empower teams to work smarter, not harder, through intuitive time tracking solutions.'
    },
    {
      id: 2,
      icon: <Users size={32} />,
      title: 'Customer First',
      description: 'Your success is our success. We build features based on real user feedback and needs.'
    },
    {
      id: 3,
      icon: <Heart size={32} />,
      title: 'Passion & Innovation',
      description: 'We love what we do and constantly innovate to provide the best experience.'
    },
    {
      id: 4,
      icon: <Shield size={32} />,
      title: 'Privacy & Security',
      description: 'Your data security is our top priority. We ensure complete privacy and protection.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'TimeFlow was born with a vision to revolutionize time tracking' },
    { year: '2021', title: '10K Users', description: 'Reached our first major milestone with 10,000 active users' },
    { year: '2022', title: 'Mobile Launch', description: 'Released mobile apps for iOS and Android platforms' },
    { year: '2023', title: '50K Users', description: 'Expanded globally serving 50,000+ happy customers' },
    { year: '2024', title: 'AI Features', description: 'Introduced AI-powered productivity insights and automation' }
  ];

  const team = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      position: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      bio: '10+ years in SaaS and productivity tools'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      bio: 'Former Tech Lead at major tech companies'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Head of Product',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      bio: 'Product strategy expert with UX focus'
    },
    {
      id: 4,
      name: 'David Park',
      position: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      bio: 'Full-stack wizard building great products'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      position: 'Head of Marketing',
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      bio: 'Growth hacker and brand strategist'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Customer Success',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Dedicated to making customers successful'
    }
  ];

  const stats = [
    { icon: <Users size={40} />, number: '50,000+', label: 'Active Users' },
    { icon: <Globe size={40} />, number: '120+', label: 'Countries' },
    { icon: <Clock size={40} />, number: '10M+', label: 'Hours Tracked' },
    { icon: <Award size={40} />, number: '4.9/5', label: 'User Rating' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="about-badge">About TimeFlow</span>
            <h1 className="about-hero-title">
              We're Building the <span className="gradient-text">Future</span> of Time Tracking
            </h1>
            <p className="about-hero-description">
              TimeFlow is more than just a time tracking tool. We're a team of passionate individuals 
              dedicated to helping teams and individuals work smarter, achieve more, and maintain a 
              healthy work-life balance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats section">
        <div className="container">
          <div className="stats-grid-about">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-about">
                <div className="stat-icon-about">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                TimeFlow was founded in 2020 with a simple yet powerful vision: to make time tracking 
                effortless and meaningful. We noticed that existing tools were either too complex or 
                lacked the features teams actually needed.
              </p>
              <p>
                Our founders, who had worked in various startups and enterprises, experienced firsthand 
                the challenges of managing time, projects, and team productivity. They knew there had 
                to be a better way.
              </p>
              <p>
                Today, TimeFlow serves over 50,000 users across 120+ countries, helping teams of all 
                sizes track time, improve productivity, and achieve their goals. But we're just getting 
                started.
              </p>
              <div className="story-features">
                <div className="story-feature">
                  <CheckCircle size={24} />
                  <span>User-friendly interface</span>
                </div>
                <div className="story-feature">
                  <CheckCircle size={24} />
                  <span>Powerful analytics</span>
                </div>
                <div className="story-feature">
                  <CheckCircle size={24} />
                  <span>Privacy-focused</span>
                </div>
                <div className="story-feature">
                  <CheckCircle size={24} />
                  <span>Constantly evolving</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="story-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=800&fit=crop" 
                  alt="Team collaboration" 
                />
                <div className="story-overlay">
                  <TrendingUp size={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="section-description">
              These principles guide everything we do at TimeFlow
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-description">
              Key milestones in our growth story
            </p>
          </div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Meet Our <span className="gradient-text">Amazing Team</span>
            </h2>
            <p className="section-description">
              The brilliant minds behind TimeFlow
            </p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <Zap size={48} />
            <h2>Join Us on Our Mission</h2>
            <p>
              We're always looking for talented individuals who share our passion 
              for building great products. Check out our open positions.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-white btn-large">View Careers</button>
              <button className="btn btn-outline btn-large">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;