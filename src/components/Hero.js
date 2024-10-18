import React, { useState } from 'react';
import '../styles/Hero.css';
import analyticsDashboard from '../images/analytics-dashboard.png';
import erpOverview from '../images/erp-overview.png';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000); // Hide message after 3 seconds
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Supercharge your company's growth.</h1>
          <p>AI-powered insights for smarter operations, happier teams, and faster scaling.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
            />
            <button type="submit">Get Early Access</button>
          </form>
          <small>Stay updated on our progress →</small>
        </div>
        <div className="hero-images">
          <img src={analyticsDashboard} alt="Analytics Dashboard" className="dashboard-image" />
          <img src={erpOverview} alt="ERP Overview" className="erp-image" />
        </div>
      </div>
      {showThankYou && (
        <div className="thank-you-message">
          Thank you for submitting. We'll let you know when we launch!
        </div>
      )}
    </section>
  );
};

export default Hero;