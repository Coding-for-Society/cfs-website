import LiquidSwipe from "react-liquidswipe";
import components from "./config";
import "./style.css";

/* change bgColor when the component changes */
function Goals() {
  return (
    <div className="goalsContainer">
      <h1>Our Goals</h1>
      <div className="blockquote">
        <p className="blockquoteText">
          &quot;By aligning our mission with the values and expectations of society and the needs of
          the natural world, we are creating the basis for trustworthy, socially acceptable and
          sustainable innovations.&quot;
        </p>
        <p className="blockquoteAuthor">Jonas Itt</p>
        <p className="blockquoteAuthor2">Founder of Coding for Society</p>
      </div>
      <div className="liquidSwipe">
        <LiquidSwipe components={components} style={{ height: '70vh', borderRadius: '20px' }} />
      </div>
    </div>
  );
}

export default Goals;
