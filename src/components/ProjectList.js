import React from "react";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import "../css/list.css";

const ProjectList = ({ projects, category }) => {
  return (
    <div className="list-container">
      {projects.map((item) => {
        const { id, slug } = item;
        return (
          <Link
            to={`/${category}-projects${slug}`}
            className="link-article"
            key={id}
          >
            <ListItem {...item} />
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectList;
