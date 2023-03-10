import { FAQTSWebsite, FAQProjectEdu, FAQCFSWebsite, FAQs } from "../../components/faqList/FAQList";
import ApplyBubble1 from "./bubbles/ApplyBubble1";
import ApplyBubble2 from "./bubbles/ApplyBubble2";
import './style.css';

function Apply() {
  return (
    <div className="applyContainer">
      <div className="titleText">
        <h1>Join us</h1>
        <p>Make a difference in the world with us!<br/>
          Found something you can see yourself working on in the list below? Or just considering an unsolicited
          application?<br/>
          Great! Just fill in this form and we will get back to you as soon as possible.</p>
      </div>
      <div className="positionsText">
        <h2>Open positions</h2>
      </div>
      <ApplyBubble1 className="positionsBubble1"/>
      <div className="tswebpageText">
        <h3>Talente Spenden Web Page</h3>
      </div>
      <FAQTSWebsite/>
      <div className="projecteduText">
        <h3>Project: Education</h3>
      </div>
      <FAQProjectEdu/>
      <div className="cfswebpageText">
        <h3>Coding for Society Web Page</h3>
      </div>
      <FAQCFSWebsite/>
      <ApplyBubble2 className="positionsBubble2"/>
      <div className="faqText">
        <h2>FAQs</h2>
      </div>
      <FAQs/>
    </div>
  );
}

export default Apply;