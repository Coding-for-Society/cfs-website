import { useState } from "react";
import ArrowIcon from "./img/ArrowIcon";
import ApplyBubble1 from "./bubbles/ApplyBubble1";
import ApplyBubble3 from "./bubbles/ApplyBubble3";
import ApplyBubble4 from "./bubbles/ApplyBubble4";
import PositionsList from "../../components/positionsList/PositionsList";
import FaqList from "../../components/faqList/FaqList";
import { useViewport } from "../../context/viewportContext";
import { positionsConfig, faqConfig } from "../../config";
import "./style.css";

function Apply() {
  const [activeFilter, setActiveFilter] = useState("");
  const filteredPositions = activeFilter === ""
    ? positionsConfig
    : positionsConfig.filter((position) => position.team === activeFilter);
  const numPositions = filteredPositions.length;
  const { width, height } = useViewport();
  const spacerHeight = `max(calc(${numPositions} * 90px + ${(width < 720 ? 200 : 0)}px), 300px)`;
  const containerHeight = `calc(2400px + ${spacerHeight})`;
  const pageHeight = `calc(900px + ${containerHeight})`;

  return (
    <div className="applyContainer" style={{ height: pageHeight }}>
      <div className="applytitleContainer">
        <h1 className="applytitleText">Make a <span className="dark">difference</span></h1>
        <ApplyBubble1 className="applytitleBubble" preserveAspectRatio="none" />
      </div>
      <div className="arrowContainer">
        {window.innerHeight < 1200 && (
          <a href="#positions">
            <ArrowIcon />
          </a>
        )}
      </div>
      <div className="positionsContainer">
        <div className="positionsText">
          <h2 id="positions">Open positions</h2>
          <div className="filter-buttons">
            <button
              type="button"
              onClick={() => setActiveFilter("")}
              className={activeFilter === "" ? "active" : ""}
            >All
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("tsWebpage")}
              className={activeFilter === "tsWebpage" ? "active" : ""}
            >
              Talente Spenden Web Page
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("education")}
              className={activeFilter === "education" ? "active" : ""}
            >
              Project Education
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("cfsWebpage")}
              className={activeFilter === "cfsWebpage" ? "active" : ""}
            >
              Coding for Society Web Page
            </button>
          </div>
          <PositionsList positions={filteredPositions} />
        </div>
        <ApplyBubble3 className="positionsBubble1" preserveAspectRatio="none" />
        <div className="applySpacer" style={{ height: spacerHeight }} />
        <ApplyBubble4
          className="positionsBubble2"
          preserveAspectRatio="none"
          style={{ top: spacerHeight }}
        />
      </div>
      <div className="faqContainer" style={{ top: containerHeight }}>
        <h2 className="faqText">FAQs</h2>
        <FaqList faqConfig={faqConfig} />
      </div>
    </div>
  );
}

export default Apply;
