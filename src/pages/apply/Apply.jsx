import './styles.css';
import '../styles.css';
import {FAQTSWebsite, FAQProjectEdu, FAQs} from "../../components/FAQList";

function Apply() {
  return (
    <div>
      <h1>Join us</h1>
      <p>Make a difference in the world with us!</p>
      <p>Found something you can see yourself working on in the list below? Or just considering an unsolicited
        application?</p>
      <p>Great! Just fill in this form and we will get back to you as soon as possible.</p>
      <img src="splotch1.svg" alt=""/>
      <h2 className="blackHeading">Open positions</h2>
      <h3>Talente Spenden Web Page</h3>
      <FAQTSWebsite />
      <h3>Project: Education</h3>
      <FAQProjectEdu />
      <h3>Coding for Society Web Page</h3>
      <FAQProjectEdu />
      <h2 className="blackHeading">FAQs</h2>
      <FAQs />
    </div>
  )
}

export default Apply;