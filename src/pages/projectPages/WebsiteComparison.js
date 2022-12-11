import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";

import UnderConstructionImg from "../../assets/UndrawSvgs/undraw_under_construction_-46-pa.svg";
import "../../css/project.css";

const WebsiteComparison = () => {
  return (
    <main>
      <SEO
        title="Website Comparison | UX Projects | Michael S. Payne II Portfolio"
        description=" Project: A comparison of the navigability of multiple Behavioral Lab websites  using eye-tracking technology"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="error-text">
        <h1 className="primary-secondary-header">
          This page is temporarily unavailable
        </h1>

        <Link to="/ux-projects" className="site-nav-link">
          Return to the UX projects page
        </Link>
      </div>
      <img
        src={UnderConstructionImg}
        alt="page under construction illustration"
        className="error-img"
      />
    </main>
  );
};

export default WebsiteComparison;
