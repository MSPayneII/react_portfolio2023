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
          <div className="project-stat">
            <h2 className="stat-header">Client: </h2>
            <p className="stat">{client}</p>
          </div>

          <div className="project-stat">
            <h2 className="stat-header">Role: </h2>
            <p className="stat">{role}</p>
          </div>

          <div className="project-stat">
            <h2 className="stat-header">Time: </h2>
            <p className="stat">{time}</p>
          </div>

          <div className="project-stat">
            <h2 className="stat-header">Team: </h2>
            <p className="stat">{team}</p>
          </div>

          <div className="project-stat">
            <h2 className="stat-header">Category: </h2>
            <p className="stat">{classification}</p>
          </div>

          <div className="project-stat">
            <h2 className="stat-header">Skills: </h2>
            <p className="stat skills-stat">{skills}</p>
          </div>
        </div>

        <div className="divider-line"></div>
      </div>
    </section>
  );
};

export default UxProjDetails;
