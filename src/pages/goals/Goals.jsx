import { useEffect, useState } from "react";
import components from "./config";
import GoalsBubble from "./bubbles/GoalsBubble";
import "./style.css";

function Goals() {
  const [showGoal1, setShowGoal1] = useState(false);
  const [showGoal2, setShowGoal2] = useState(false);
  const [showGoal3, setShowGoal3] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setShowGoal1(true);
      }
      if (window.scrollY > 1000) {
        setShowGoal2(true);
      }
      if (window.scrollY > 1500) {
        setShowGoal3(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="goalsContainer">
      <h1 className="goalsTitle">Our Goals</h1>
      <div className="blockquote">
        <p className="blockquoteText">
          &quot;Our mission at Coding for Society is to make use of our computer science skills
          for what we believe to be the best purpose possible: to create social value. <br />
          We commit to making the world a better place.&quot;
        </p>
        <p className="blockquoteAuthor">Jonas Itt</p>
        <p className="blockquoteAuthor2">Founder of Coding for Society</p>
      </div>
      <div className="goalsTextContainer">
        <GoalsBubble
          className="goalsBubble"
          preserveAspectRatio="none"
        />
        <div className={`goalsText goalsText1 ${showGoal1 ? "show" : ""}`}>
          <h3>{components[0].title}</h3>
          {components[0].text}
        </div>
        <div className={`goalsText goalsText2 ${showGoal2 ? "show" : ""}`}>
          <h3>{components[1].title}</h3>
          {components[1].text}
        </div>
        <div className={`goalsText goalsText3 ${showGoal3 ? "show" : ""}`}>
          <h3>{components[2].title}</h3>
          {components[2].text}
        </div>
      </div>
      <div className="spacer" />
    </div>
  );
}

export default Goals;
