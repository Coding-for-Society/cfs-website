import "./style.css";

export default function TeamListEntry(props) {
  const { member } = props;

  return (
    <div className="teamListEntry">
      <div className="teamListEntryImageContainer">
        <img src={member.image} alt={member.name} />
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  );
}
