import ProjectsDetailTeamEntry from "./projectsDetailTeamEntry/ProjectsDetailTeamEntry";
import "./style.css";

const ProjectsDetailTeam = (props) => {
  const { team } = props;
  return (
    <ul className="projectsDetailTeam">
      {team.map((member) => (
        <li key={member}>
          <ProjectsDetailTeamEntry member={member} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectsDetailTeam;
