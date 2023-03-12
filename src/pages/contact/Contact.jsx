import ContactBubble from "./bubbles/ContactBubble";
import "./style.css";

function Contact() {
  return (
    <div className="contactpageContainer">
      <div className="contacttitleContainer">
        <div className="contacttitleText">
          <h1>Contact us</h1>
          <p>
            Feel free to contact us! We are always open to new project ideas,
            collaborations, and feedback - send us a message!
          </p>
        </div>
        <div className="mainContainer">
          <ContactBubble className="contactpageBubble" />
          <p className="nameText">Name:</p>
          <input type="text" className="nameInput" />
          <p className="emailText">Email:</p>
          <input type="text" className="emailInput" />
          <p className="subjectText">Subject:</p>
          <input type="text" className="subjectInput" />
          <p className="messageText">Your Message:</p>
          <textarea className="messageInput" />
          <button type="submit" className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
