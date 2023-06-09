/* eslint-disable */
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TeamBubble1 from "../bubbles/TeamBubble1";

export default function TeamSliderEntry(props) {
  const { member } = props;

  const [descActive, setDescAvtive] = useState(false);

  const handleEnter = () => {
    setDescAvtive(true);
  };

  const handleLeave = () => {
    setDescAvtive(false);
  };

  return (
    <motion.div
      className="teamSliderEntry"
      role="button"
      tabIndex={0}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="teamSliderImgContainer">
        <img
          src={member.image}
          alt={member.name}
          className="teamSliderEntryImg"
        />
        <div className="imageOverlay">
          {descActive && (
            <Link
              draggable="false"
              className="readMore"
              to={`/projects/`}
            >
              Find out more
            </Link>
          )}
        </div>
      </div>
      <AnimatePresence>
        {descActive && (
          <motion.div
            key={member.id}
            className="memberBubbleContainer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opactiy: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TeamBubble1 />
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="teamSliderEntryName">{member.name}</h3>
      <p className="teamSliderEntryRole">{member.role}</p>
    </motion.div>
  );
}
/* eslint-disable */