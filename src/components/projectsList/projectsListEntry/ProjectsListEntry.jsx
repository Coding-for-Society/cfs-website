import "./style.css";

export default function ProjectsListEntry(props) {
  const { project } = props;
  return <div>{project.name}</div>;
}
