import "./style.css";
import TeamListEntry from "./teamListEntry/TeamListEntry";

export default function TeamList(props) {
  const { members } = props;

  return (
    <div className="teamList">
      <ul>
        {Object.values(members).map((member) => (
          <li key={member}>
            <TeamListEntry member={member} />
          </li>
        ))}
      </ul>
    </div>
  );
}
