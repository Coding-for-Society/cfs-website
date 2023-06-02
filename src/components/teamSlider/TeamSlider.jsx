/* eslint-disable */
import "./style.css";
import TeamSliderEntry from "./teamSliderEntry/teamSliderEntry";
import ScrollDrag from "./ScrollDrag";

function sayHello() {
  const element = document.getElementById('team-slider');
  element.scrollBy({
    top: 0,
    left: 1000,
    behavior: "smooth",
  });
}

export default function TeamSlider(props) {
  const { team } = props;

  return (
    <div
      id="team-slider"
      className="teamSliderEntryList"
    >
      <button type="button" onClick={sayHello}>Default</button>;
      {Object.values(team).map((member, i, { length }) => (
        <div
          key={member.id}
          className={i + 1 === length ? "lastTeamSliderItem" : ""}
        >
          <TeamSliderEntry member={member} />
        </div>
      ))}
    </div>
  );
}
/* eslint-disable */