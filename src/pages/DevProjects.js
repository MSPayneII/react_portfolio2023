import Collaborate from "../components/Collaborate";
import ProjectList from "../components/ProjectList";
import { useGlobalContext } from "../context";
import { devProjects } from "../utils/lists";

const Projects = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <main onMouseOver={closeSubmenu}>
      <h1 className="primary-secondary-header projects-page-header">
        Web development projects
      </h1>

      <ProjectList projects={devProjects} category={"dev"} />
      <Collaborate />
    </main>
  );
};

export default Projects;
