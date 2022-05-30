import projects from "../../projects";
import Project from "./Project/Project";
import "./projects.scss";

function Projects() {
  return (
    <div id="projects">
      <div className="projects-section">
        <div className="section-header">Projects</div>
        <div className="project-cards">
          {projects.map((p, idx) => (
            <Project key={idx} project={p} />
          ))}
        </div>
      </div>
      <div className="arrow-down" />
    </div>
  );
}

export default Projects;
