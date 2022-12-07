import Collaborate from "../components/Collaborate";
import ProjectList from "../components/ProjectList";
import { useGlobalContext } from "../context";
import { uxProjects } from "../utils/lists";

const UxProjects = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <h1 className="primary-secondary-header projects-page-header">
        UXR & design projects
      </h1>

      <ProjectList projects={uxProjects} category={"ux"} />
      <Collaborate />
    </main>
  );
};

export default UxProjects;
