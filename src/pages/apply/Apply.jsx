import FAQList from "../../components/faqList/FAQList";
import { faqCFSW, faqEducation, faqTSW, faqApply } from "../../config";
import ApplyBubble1 from "./bubbles/ApplyBubble1";
import ApplyBubble2 from "./bubbles/ApplyBubble2";
import "./style.css";

function Apply() {
  return (
    <div className="applyContainer">
      <div className="applytitleText">
        <h1>Join us</h1>
        <p>
          Make a difference in the world with us!
          <br />
          Found something you can see yourself working on in the list below? Or
          just considering an unsolicited application?
          <br />
          Great! Just fill in this form and we will get back to you as soon as
          possible.
        </p>
      </div>
      <div className="positionsTitleContainer">
        <h2 className="positionsText">Open positions</h2>
        <ApplyBubble1 className="positionsBubble1" />
      </div>
      <h3 className="tswebpageText">Talente Spenden Web Page</h3>
      <FAQList faqs={faqTSW} />
      <h3 className="projecteduText">Project: Education</h3>
      <FAQList faqs={faqEducation} />
      <h3 className="cfswebpageText">Coding for Society Web Page</h3>
      <FAQList faqs={faqCFSW} />
      <div className="applyTitleContainer">
        <ApplyBubble2 className="positionsBubble2" />
        <h2 className="faqText">FAQs</h2>
      </div>
      <FAQList faqs={faqApply} />
    </div>
  );
}

export default Apply;
