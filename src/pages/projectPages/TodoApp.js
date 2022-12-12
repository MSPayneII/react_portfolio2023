import React from "react";
import { useGlobalContext } from "../../context";
import SEO from "../../components/SEO";

import DevProjDetails from "../../components/singleProjectComponents/DevProjDetails";
import MVPFeatures from "../../components/singleProjectComponents/MVPFeatures";
import "../../css/project.css";

import TodoAppMainImg from "../../assets/ToDoApp/todo_app_main_img.png";

import Preview1 from "../../assets/ToDoApp/todo_app_preview1.png";
import Preview2 from "../../assets/ToDoApp/todo_app_preview2.png";

import Collaborate from "../../components/Collaborate";

const TodoApp = () => {
  const { findProjectInfo } = useGlobalContext();

  let project = findProjectInfo("dev", "/todo-app");

  const { title, client, tech, classification, site, github, tldr, features } =
    project;

  return (
    <main>
      <SEO
        title="Todo App | Web Development Projects Collection | Michael S. Payne II Portfolio"
        description="Project: A todo app built with ReactJS that supports drag and drop functionality and list filtering"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <div className="main-project-img-container">
        <img src={TodoAppMainImg} alt="" className="project-img" />
      </div>

      <div className="project-content-container">
        <DevProjDetails
          title={title}
          client={client}
          tech={tech}
          classification={classification}
          site={site}
          github={github}
        />
        <section>
          <h2 className="tertiary-header">{tldr.header}</h2>
          <p>{tldr.body}</p>
        </section>
        <MVPFeatures features={features} />

        <section className="neg-margin-top-9">
          <h2 className="tertiary-header">Static Preview</h2>
          <figure className="project-img-container pos-margin-bottom-4">
            <img
              src={Preview1}
              alt="Desktop display in dark and light modes"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Mobile display in both light and dark modes
            </figcaption>
          </figure>
          <figure className="project-img-container ">
            <img
              src={Preview2}
              alt="Mobile display in dark and light modes"
              className="project-img"
            />
            <figcaption className="project-figure__caption">
              Mobile display in dark and light modes
            </figcaption>
          </figure>
        </section>
      </div>

      <Collaborate />
    </main>
  );
};

export default TodoApp;
