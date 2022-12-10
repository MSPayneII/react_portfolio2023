import React from "react";
import "../../css/project.css";
import { BiLinkExternal } from "react-icons/bi";
const DevProjDetails = ({
  title,
  client,
  tech,
  classification,
  site,
  github,
}) => {
  return (
    <section className="dev-project-overview project-section-margin-bottom">
      <div>
        <div className="divider-line"></div>
        <h1 className="primary-secondary-header">{title}</h1>

        <div className="project-stats-container">
          {/* <p className="project-stat">
            <span className="stat-header">Client : </span>
            {client}
          </p> */}
          <p className="project-stat">
            <strong className="stat-header">Tech: </strong>
            {tech}
          </p>
          <p className="project-stat">
            <strong className="stat-header">Category: </strong>
            {classification}
          </p>
        </div>
        <div className="external-link-container">
          <a href={site} className="external-link">
            Go to website <BiLinkExternal className="external-link-icon" />
          </a>
          <a href={github} className="external-link">
            Go to code <BiLinkExternal className="external-link-icon" />
          </a>
        </div>
        <div className="divider-line"></div>
      </div>
    </section>
  );
};

export default DevProjDetails;
