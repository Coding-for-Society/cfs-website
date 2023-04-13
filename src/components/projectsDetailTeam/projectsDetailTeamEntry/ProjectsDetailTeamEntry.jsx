import { Link } from "react-router-dom";
import "./style.css";

const ProjectsDetailTeamEntry = (props) => {
  const { member } = props;
  return (
    <Link className="projectsDetailTeamEntryLink" to={`/team/${member.id}`}>
      <div className="projectsDetailTeamEntry">
        <div className="projectsDetailTeamEntryImageContainer">
          <img src={member.image} alt={member.name} />
        </div>
        <h3>{member.name}</h3>
      </div>
    </Link>
  );
};

export default ProjectsDetailTeamEntry;
