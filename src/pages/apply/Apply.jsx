import { useState } from "react";
import ApplyBubble1 from "./bubbles/ApplyBubble1";
import ApplyBubble2 from "./bubbles/ApplyBubble2";
import ApplyBubble3 from "./bubbles/ApplyBubble3";
import PositionsList from "../../components/positionsList/PositionsList";
import { positionsConfig, faqConfig } from "../../config";
import FaqList from "../../components/faqList/FaqList";
import "./style.css";

function Apply() {
  const [activeFilter, setActiveFilter] = useState("");
  const filteredPositions = activeFilter === ""
    ? positionsConfig
    : positionsConfig.filter((position) => position.team === activeFilter);
  const numPositions = filteredPositions.length;
  const height = `calc(${numPositions} * (60px + 1em))`;

  return (
    <div className="applyContainer">
      <div className="applytitleContainer">
        <h1 className="applytitleText">Make a <span className="dark">difference</span></h1>
        <ApplyBubble1 className="applytitleBubble" preserveAspectRatio="none" />
      </div>
      <div className="applysubtitleContainer">
        <div className="applySubtitleText">
          <h2>Join us</h2>
          <p>
            Make a difference in the world with us!
            <br />
            Found something <span className="green">you can see yourself</span> working on in the list below? Or
            just considering an unsolicited application?
            <br />
            Great! Just fill in this form and we will get back to you as soon as
            possible.
          </p>
        </div>
        <ApplyBubble2 className="applysubtitleBubble" />
      </div>
      <div className="positionsContainer">
        <div className="positionsText">
          <h2>Open positions</h2>
          <div className="filter-buttons">
            <button type="button" onClick={() => setActiveFilter("")} className={activeFilter === "" ? "active" : ""}>All</button>
            <button type="button" onClick={() => setActiveFilter("tsWebpage")} className={activeFilter === "tsWebpage" ? "active" : ""}>
              Talente Spenden Web Page
            </button>
            <button type="button" onClick={() => setActiveFilter("education")} className={activeFilter === "education" ? "active" : ""}>
              Project Education
            </button>
            <button type="button" onClick={() => setActiveFilter("cfsWebpage")} className={activeFilter === "cfsWebpage" ? "active" : ""}>
              Coding for Society Web Page
            </button>
          </div>
          <PositionsList positions={filteredPositions} />
        </div>
        <ApplyBubble3 style={{ height }} className="positionsBubble" preserveAspectRatio="none" />
      </div>
      <div className="faqContainer">
        <h2 className="faqText">FAQs</h2>
        <FaqList faqConfig={faqConfig} />
      </div>
    </div>
  );
}

export default Apply;
