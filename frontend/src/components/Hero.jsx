import React from 'react';
import { aboutData } from '../data/mockData';

// The landing view previously never said who this is: the name only
// appeared at 10px in the menu bar, and the tagline was buried inside a
// window. This states both before anything else.
const Hero = ({ onAboutClick }) => {
  return (
    <section className="hero" aria-labelledby="hero-name">
      <h1 className="hero-name" id="hero-name">{aboutData.name}</h1>
      <p className="hero-tagline">{aboutData.tagline}</p>
      <p className="hero-blurb">
        Social media, content and growth. I ship reels end to end, run the ads
        behind them, and keep a tracker on what actually worked.
      </p>
      <div className="hero-meta">
        <span className="hero-chip hero-chip-open"><span className="hero-dot" aria-hidden="true" />Open to full-time roles</span>
        <span className="hero-chip">Delhi NCR</span>
        <button type="button" className="hero-cta" onClick={onAboutClick}>
          More about me
        </button>
      </div>
    </section>
  );
};

export default Hero;
