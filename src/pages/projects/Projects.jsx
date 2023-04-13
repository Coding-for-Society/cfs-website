import "./style.css";
import ProjectsList from "../../components/projectsList/ProjectsList";
import { projectConfig } from "../../config";

export default function Projects() {
  return (
    <div className="projectsPageContainer">
      <div className="projectsPageText">
        <h1>Our projects</h1>
        <p>
          All of our projects focus on providing social value. We work together
          with other social teams and realize our own ideas.
        </p>
      </div>
      <ProjectsList projects={projectConfig} />
    </div>
  );
}
