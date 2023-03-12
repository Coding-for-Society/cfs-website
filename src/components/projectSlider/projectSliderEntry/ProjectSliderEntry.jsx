import "./style.css";
import { useNavigate } from "react-router-dom";

export default function ProjectSliderEntry(props) {
  const { project } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div
      className="projectSliderEntry"
      onClick={handleNavigate}
      onKeyUp={handleNavigate}
      role="button"
      tabIndex={0}
    >
      <img src={project.image} alt={project.name} />
      <h3 className="projectSliderEntryText">{project.name}</h3>
    </div>
  );
}
