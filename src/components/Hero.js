import React from "react";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <div className="hero" onMouseOver={closeSubmenu}>
      <div className="polaroid">
        <div className="hero-image"></div>
        <div className="polaroid-text">
          <p className="quaternary-header">Welcome to my site!</p>
        </div>
      </div>
      <div className="hero-text">
        <div>
          <h1 className="primary-secondary-header hero-title">
            Hello! I'm Michael, an aspiring UX Engineer, and Researcher
          </h1>
          <a href="" className="site-nav-link">
            View my work
          </a>
        </div>

        <div className="divider-line"></div>
      </div>
    </div>
  );
};

export default Hero;
