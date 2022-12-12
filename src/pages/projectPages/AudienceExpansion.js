import React from "react";
import { Link } from "react-router-dom";
import UnderConstructionImg from "../../assets/UndrawSvgs/undraw_under_construction_-46-pa.svg";
import SEO from "../../components/SEO";

const AudienceExpansion = () => {
  return (
    <main>
      <SEO
        title="Audience Expansion | UX Research and Design Projects Collection | Michael S. Payne II Portfolio"
        description="Project: A customer assessment of current and potential customers to provide recommendations for attracting a new audience for Journeys International"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <section className="error-text">
        <h1 className="primary-secondary-header">
          This page is temporarily unavailable
        </h1>

        <Link to="/ux-projects" className="site-nav-link">
          Return to the UX projects page
        </Link>
      </section>
      <img
        src={UnderConstructionImg}
        alt="page under construction illustration"
        className="error-img"
      />
    </main>
  );
};

export default AudienceExpansion;
