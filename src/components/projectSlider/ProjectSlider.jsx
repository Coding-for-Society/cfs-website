import ProjectSliderEntry from "./projectSliderEntry/ProjectSliderEntry";
import "./style.css";

export default function ProjectSlider(props) {
  const { projects } = props;

  return (
    <div className="projectSlider">
      <ul className="projectSliderEntryList">
        {projects.map((project) => (
          <li>
            <ProjectSliderEntry project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
