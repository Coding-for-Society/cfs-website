import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectSliderEntry(props) {
  const { project } = props;

  const [descActive, setDescAvtive] = useState(false);

  const handleEnter = () => {
    setDescAvtive(true);
  };

  const handleLeave = () => {
    setDescAvtive(false);
  };

  return (
    <motion.div
      className="projectSliderEntry"
      role="button"
      tabIndex={0}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="imageOverlay">
        {descActive && (
          <Link
            draggable="false"
            className="readMore"
            to={`/projects/${project.id}`}
          >
            Find out more
          </Link>
        )}
      </div>
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        alt={project.name}
        className="projectSliderEntryImg"
      />
      <h3 className="projectSliderEntryText">{project.name}</h3>
    </motion.div>
  );
}
