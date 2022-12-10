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
              <strong className="stat-header">Client: </strong>
              {client}
            </p>
            <p className="project-stat">
              <strong className="stat-header">Role: </strong>
              {role}
            </p>
            <p className="project-stat">
              <strong className="stat-header">Time: </strong>
              {time}
            </p>
          </div>
          <div>
            <p className="project-stat">
              <strong className="stat-header">Team: </strong>
              {team}
            </p>

            <p className="project-stat">
              <strong className="stat-header">Category: </strong>
              {classification}
            </p>
            <p className="project-stat skills-stat">
              <strong className="stat-header">Skills: </strong>
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
