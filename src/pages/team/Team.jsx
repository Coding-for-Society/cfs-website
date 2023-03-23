import TeamList from "../../components/teamList/TeamList";
import { teamConfig } from "../home/config";
import "./style.css";

export default function Team() {
  return (
    <div className="teamPageContainer">
      <div className="teamTextContainer">
        <h1>Our Team</h1>
        <p>
          All of our projects focus on providing social value. We work together
          with other social teams and realize our own ideas.
        </p>
      </div>
      <TeamList members={teamConfig} />
    </div>
  );
}
