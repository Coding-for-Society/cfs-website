import { useState } from "react";
import ApplyBubble1 from "./bubbles/ApplyBubble1";
import ApplyBubble2 from "./bubbles/ApplyBubble2";
import ApplyBubble3 from "./bubbles/ApplyBubble3";
import ApplyBubble4 from "./bubbles/ApplyBubble4";
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
  const spacerHeight = `calc(max(calc(${numPositions} * 150px + 800px), 1000px) - 1000px)`;
  const containerHeight = `calc(1600px + ${spacerHeight})`;
  const pageHeight = `calc(2000px + ${containerHeight})`;

  return (
    <div className="applyContainer" style={{ height: pageHeight }}>
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
            Great! Just send us an e-mail with your motivation and CV and we will get back to you as
            soon as possible.
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
        <ApplyBubble3 className="positionsBubble1" preserveAspectRatio="none" />
        <div className="applySpacer" style={{ height: spacerHeight }} />
        <ApplyBubble4 className="positionsBubble2" preserveAspectRatio="none" style={{ top: spacerHeight }} />
      </div>
      <div className="faqContainer" style={{ top: containerHeight }}>
        <h2 className="faqText">FAQs</h2>
        <FaqList faqConfig={faqConfig} />
      </div>
    </div>
  );
}

export default Apply;
