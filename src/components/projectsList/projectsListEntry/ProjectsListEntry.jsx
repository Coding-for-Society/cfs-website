import "./style.css";

export default function ProjectsListEntry(props) {
  const { project } = props;
  return (
    <div className="projectsListEntry">
      <div className="imageOverlay">Test</div>
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        alt={project.name}
        className="projectsListEntryImg"
      />
      <h3 className="projectListEntryText">{project.name}</h3>
    </div>
  );
}
