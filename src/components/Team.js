import React from 'react';
import '../styles/Team.css';
import bcgLogo from '../images/bcg-logo.png';
import ibmLogo from '../images/ibm-logo.png';
import linkedinLogo from '../images/linkedin-logo.png';

const Team = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Team</h2>
        <p className="subheading">Built by operational experts from leading companies and institutions:</p>
        <div className="company-logos">
          <img src={bcgLogo} alt="BCG Logo" />
          <img src={ibmLogo} alt="IBM Logo" />
          <img src={linkedinLogo} alt="LinkedIn Logo" />
        </div>
        <div className="quote-box">
          <p className="quote">"We're building Prism AI to be the tool we wish we had when scaling our previous companies. Our vision is to make world-class operational practices accessible to every startup."</p>
          <p className="attribution">- The Prism AI Team</p>
        </div>
        <h3>Be among the first to experience Prism AI</h3>
        <button className="waitlist-button" onClick={scrollToHero}>Join the Waitlist</button>
        <p className="cta-subtext">Get exclusive early access and shape the future of startup operations.</p>
      </div>
    </section>
  );
};

export default Team;