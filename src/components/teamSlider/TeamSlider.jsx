/* eslint-disable */
import "./style.css";
import "./flickity.css";
import TeamSliderEntry from "./teamSliderEntry/teamSliderEntry";
import ScrollDrag from "./ScrollDrag";
import Flickity from 'react-flickity-component'

const flickityOptions = {
  groupCells: true,
  initialIndex: 0,
  pageDots: true
}



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
    <Flickity
    className={'carousel'}
    elementType={'div'} // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static // default false
  >
    {Object.values(team).map((member, i, { length }) => (
          <div
            key={member.id}
            className={i + 1 === length ? "lastTeamSliderItem" : ""}
          >
            <TeamSliderEntry member={member} />
          </div>
        ))}
  </Flickity>
  );
}
/* eslint-disable */