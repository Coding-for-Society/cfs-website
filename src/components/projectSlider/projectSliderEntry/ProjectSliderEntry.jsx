import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProjectSliderEntry(props) {
  const { project } = props;
  const navigate = useNavigate();

  const [descActive, setDescAvtive] = useState(false);

  const handleNavigate = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleEnter = () => {
    setDescAvtive(true);
  };

  const handleLeave = () => {
    setDescAvtive(false);
  };

  return (
    <div
      className="projectSliderEntry"
      onClick={handleNavigate}
      onKeyUp={handleNavigate}
      role="button"
      tabIndex={0}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="imageOverlay">
        {" "}
        <p
          className={
            descActive
              ? "projectSliderEntryDesc"
              : "projectSliderEntryDesc hidden"
          }
        >
          {project.desc}
        </p>{" "}
      </div>
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        alt={project.name}
        className="projectSliderEntryImg"
      />
      <h3 className="projectSliderEntryText">{project.name}</h3>
    </div>
  );
}
