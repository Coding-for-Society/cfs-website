import "./style.css";

export default function ProjectSliderEntry(props) {
  const { project } = props;

  return (
    <div className="projectSliderEntry">
      <img src={project.image} alt={project.name} />
      <h3 className="projectSliderEntryText">{project.name}</h3>
      <p>{project.desc}</p>
    </div>
  );
}
