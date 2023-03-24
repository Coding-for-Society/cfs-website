import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TeamListEntryBubble from "./bubbles/TeamListEntryBubble";
import "./style.css";

export default function TeamListEntry(props) {
  const { member } = props;

  const [active, setActive] = useState(false);
  const handleEnter = () => {
    setActive(true);
  };
  const handleLeave = () => {
    setActive(false);
  };

  return (
    <div
      className="teamListEntry"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="teamListEntryImageContainer">
        <img src={member.image} alt={member.name} />
      </div>
      <h3 className={active ? "teamTextActive" : "teamTextInactive"}>
        {member.name}
      </h3>
      <p className={active ? "teamTextActive" : "teamTextInactive"}>
        {member.role}
      </p>
      <AnimatePresence>
        {active && (
          <motion.div
            className="teamListEntryBubbleContainer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <TeamListEntryBubble className="teamListEntryBubble" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
