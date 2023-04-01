import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

export default function ProjectsListEntry(props) {
  const { project } = props;
  const [descActive, setDescActive] = useState(false);
  const handleEnter = () => {
    setDescActive(true);
  };
  const handleExit = () => {
    setDescActive(false);
  };

  return (
    <Link className="projectsListEntryLink" to={`/projects/${project.id}`}>
      <div
        className="projectsListEntry"
        onMouseEnter={handleEnter}
        onMouseLeave={handleExit}
      >
        <div className="projectsListImageOverlay">
          {descActive && <p>{project.desc}</p>}
        </div>
        <div
          style={{ backgroundImage: `url(${project.image})` }}
          alt={project.name}
          className="projectsListEntryImg"
        />
        <h3 className="projectListEntryText">{project.name}</h3>
      </div>
    </Link>
  );
}
