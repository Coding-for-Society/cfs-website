import "./style.css";
import "./flickity.css";
import Flickity from 'react-flickity-component';
import TeamSliderEntry from "./teamSliderEntry/teamSliderEntry";

const flickityOptions = {
  groupCells: true,
  initialIndex: 0,
  pageDots: true,
};

export default function TeamSlider(props) {
  const { team } = props;

  return (
    <Flickity
      className="carousel"
      elementType="div"
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
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
