import React from "react";
import { useGlobalContext } from "../context";

const Hero = ({ workSection }) => {
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
          <button
            className="btn site-nav-link work-btn"
            onClick={() =>
              workSection.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Jump to my work
          </button>
        </div>

        <div className="divider-line"></div>
      </div>
    </div>
  );
};

export default Hero;
