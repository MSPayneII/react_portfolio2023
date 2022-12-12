import Collaborate from "../components/Collaborate";
import ProjectList from "../components/ProjectList";
import { useGlobalContext } from "../context";
import { devProjects } from "../utils/lists";
import SEO from "../components/SEO";

const Projects = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <main onMouseOver={closeSubmenu}>
      <SEO
        title="Web Development Projects Collection | Michael S. Payne II Portfolio"
        description="A collection of my web development projects"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <h1 className="primary-secondary-header projects-page-header">
        Web development projects
      </h1>

      <ProjectList projects={devProjects} category={"dev"} />
      <Collaborate />
    </main>
  );
};

export default Projects;
