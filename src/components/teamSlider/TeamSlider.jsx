import "./style.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TeamSliderEntry from "./teamSliderEntry/teamSliderEntry";

export default function TeamSlider(props) {
  const { team } = props;
  const [sliderWidth, setSliderWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setSliderWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={slider}
      className="outerTeamSlider"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
        className="teamSlider"
      >
        <ul className="teamSliderEntryList">
          {Object.values(team).map((member, i, { length }) => (
            <li
              key={member.id}
              className={i + 1 === length ? "lastTeamSliderItem" : ""}
            >
              <TeamSliderEntry member={member} />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
