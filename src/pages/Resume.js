import React from "react";
import { useGlobalContext } from "../context";
import { education, skills, experience } from "../utils/lists";
import "../css/resume.css";
import SEO from "../components/SEO";

const Resume = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <main onMouseOver={closeSubmenu}>
      <SEO
        title="Resume | Michael S. Payne II Portfolio"
        description="A digital version of my personal resume"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <section className="resume-section">
        <h1 className="primary-secondary-header">Education</h1>
        <div className="resume-lists-grouping">
          {education.map((degree) => {
            const { id, header, school, year, gpa } = degree;
            return (
              <div key={id}>
                <h3 className="quaternary-header">{header}</h3>
                <ul className="resume-list">
                  <li className="resume-list-item">{school}</li>
                  <li className="resume-list-item">{year}</li>
                  {gpa ? <li className="resume-list-item">{gpa}</li> : null}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="divider-line"></div>
      </section>
      <section className="resume-section">
        <h1 className="primary-secondary-header">Skills</h1>
        <div className="resume-lists-grouping">
          {skills.map((skill) => {
            const { id, header, talent } = skill;
            return (
              <div key={id}>
                <h3 className="quaternary-header">{header}</h3>
                <ul className="resume-list">
                  {talent.map((skillSet, index) => {
                    return (
                      <li className="resume-list-item" key={index}>
                        - {skillSet}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="divider-line"></div>
      </section>
      <section className="resume-section">
        <h1 className="primary-secondary-header">Experience</h1>
        <div className="resume-experience-grouping">
          {experience.map((job) => {
            const { id, role, company, timeFrame, type, description } = job;
            return (
              <div key={id}>
                <h3 className="quaternary-header">
                  {role} / {company}
                </h3>
                <p className="job-details">
                  <em>
                    {timeFrame} / {type}
                  </em>
                </p>
                <p className="job-description">{description}</p>
              </div>
            );
          })}
        </div>
        <div className="divider-line"></div>
      </section>
    </main>
  );
};

export default Resume;
