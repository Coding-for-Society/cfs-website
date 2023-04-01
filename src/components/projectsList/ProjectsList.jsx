import ProjectsListEntry from "./projectsListEntry/ProjectsListEntry";
import "./style.css";

export default function ProjectsList(props) {
  const { projects } = props;

  return (
    <div className="projectsList">
      <ul>
        {projects.map((project) => (
          <li key={project}>
            <ProjectsListEntry project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
