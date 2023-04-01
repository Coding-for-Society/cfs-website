import { useParams } from "react-router-dom";
import TeamDetailBubble from "./bubbles/TeamDetailBubble";
import { teamConfig } from "../../../config";
import "./style.css";

export default function TeamDetail() {
  const { id } = useParams();

  const member = Object.values(teamConfig).find((m) => m.id === id);

  return (
    <div className="teamDetailContainer">
      <h1 className="teamDetailHeading">Our Team</h1>

      <div className="teamDetailContentContainer">
        <div className="teamDetailContent">
          <h2>{member.name}</h2>
          <div className="teamDetailGrid">
            <div className="teamDetailImageContainer">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="teamDetailGridText">
              <h3>{member.role}</h3>
              <p>{member.own_text}</p>
            </div>
          </div>
        </div>
        <TeamDetailBubble
          className="teamDetailBubble"
          preserveAspectRatio="none"
        />
      </div>
    </div>
  );
}
