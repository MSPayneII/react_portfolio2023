import React from "react";
import { Link } from "react-router-dom";
const Collaborate = () => {
  return (
    <article className="collaborate-container">
      <h2 className="primary-secondary-header">Want to collaborate?</h2>
      <div className="divider-line"></div>
      <div>
        <Link to="/contact-me" className="site-nav-link">
          Contact me
        </Link>
      </div>
    </article>
  );
};

export default Collaborate;
