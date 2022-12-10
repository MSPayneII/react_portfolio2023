import Collaborate from "../components/Collaborate";
import ProjectList from "../components/ProjectList";
import { useGlobalContext } from "../context";
import { uxProjects } from "../utils/lists";

import { SEO } from "../components/SEO";

const UxProjects = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <SEO
        title="UX Research and Design Projects Collection | Michael S. Payne II Portfolio"
        description="A collection of my user experience projects"
        name="Michael S. Payne II Portfolio"
        type="article"
      />
      <h1 className="primary-secondary-header projects-page-header">
        UXR & design projects
      </h1>

      <ProjectList projects={uxProjects} category={"ux"} />
      <Collaborate />
    </main>
  );
};

export default UxProjects;
