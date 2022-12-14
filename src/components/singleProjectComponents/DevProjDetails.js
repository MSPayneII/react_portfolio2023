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
          <div className="project-stat">
            <h2 className="stat-header">Tech: </h2>
            <p className="stat">{tech}</p>
          </div>

          <div className="project-stat">
            <h2 className="stat-header">Category: </h2>
            <p className="stat">{classification}</p>
          </div>
        </div>
        <ul className="external-link-container">
          <li>
            <a href={site} className="external-link">
              Go to website <BiLinkExternal className="external-link-icon" />
            </a>
          </li>
          <li>
            <a href={github} className="external-link">
              Go to code <BiLinkExternal className="external-link-icon" />
            </a>
          </li>
        </ul>
        <div className="divider-line"></div>
      </div>
    </section>
  );
};

export default DevProjDetails;
