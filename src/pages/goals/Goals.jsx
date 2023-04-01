import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import components from "./config";
import GoalsBubble from "./bubbles/GoalsBubble";
import "./style.css";

function Goals() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    components.forEach((component, index) => {
      const trigger = index === 0 ? ".goalsTitle" : `#component-${index}`;
      const start = index === 0 ? "top center" : `top+=${index * 100} center`;
      const end =
        index === components.length - 1
          ? "bottom center"
          : `top+=${(index + 1) * 100} center`;

      gsap
        .timeline({
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub: true,
            toggleActions: "play none none reverse",
          },
        })
        .from(`#component-${index}`, { opacity: 0, y: 100 })
        .to(`#component-${index}`, { opacity: 0, y: -100 });
    });
  }, []);

  return (
    <div className="goalsContainer">
      <h1 className="goalsTitle">Our Goals</h1>
      <div className="blockquote">
        <p className="blockquoteText">
          &quot;Our mission at Coding for Society is to make use of our computer
          science skills for what we believe to be the best purpose possible: to
          create social value. <br />
          We commit to making the world a better place.&quot;
        </p>
        <p className="blockquoteAuthor">Jonas Itt</p>
        <p className="blockquoteAuthor2">Founder of Coding for Society</p>
      </div>
      <div className="goalsTextContainer">
        <GoalsBubble className="goalsBubble" preserveAspectRatio="none" />
        {components.map((component) => (
          <div className="goalsText" id={component.id}>
            <h3>{component.title}</h3>
            {component.text}
          </div>
        ))}
      </div>
      <div className="spacer" />
    </div>
  );
}

export default Goals;
