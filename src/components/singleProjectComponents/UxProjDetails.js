import React from "react";
import "../../css/project.css";

const UxProjDetails = ({
  title,
  client,
  time,
  classification,
  role,
  team,
  skills,
}) => {
  return (
    <section className="dev-project-overview project-section-margin-bottom">
      <div>
        <div className="divider-line"></div>
        <h1 className="primary-secondary-header">{title}</h1>

        <div className="project-stats-container flex-stats-container">
          <div>
            <p className="project-stat">
              <span className="stat-header">Client : </span>
              {client}
            </p>
            <p className="project-stat">
              <span className="stat-header">Role : </span>
              {role}
            </p>
            <p className="project-stat">
              <span className="stat-header">Time : </span>
              {time}
            </p>
          </div>
          <div>
            <p className="project-stat">
              <span className="stat-header">Team : </span>
              {team}
            </p>

            <p className="project-stat">
              <span className="stat-header">Category : </span>
              {classification}
            </p>
            <p className="project-stat">
              <span className="stat-header">Skills : </span>
              {skills}
            </p>
          </div>
        </div>

        <div className="divider-line"></div>
      </div>
    </section>
  );
};

export default UxProjDetails;
