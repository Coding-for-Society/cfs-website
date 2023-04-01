import "./style.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProjectSliderEntry from "./projectSliderEntry/ProjectSliderEntry";

export default function ProjectSlider(props) {
  const { projects } = props;
  const [sliderWidth, setSliderWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setSliderWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={slider}
      className="outerProjectSlider"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -sliderWidth }}
        className="projectSlider"
      >
        <ul className="projectSliderEntryList">
          {Object.values(projects).map((project, i, { length }) => (
            <li
              key={project.id}
              className={i + 1 === length ? "lastSliderItem" : ""}
            >
              <ProjectSliderEntry project={project} />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
