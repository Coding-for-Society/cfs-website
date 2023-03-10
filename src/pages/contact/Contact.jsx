import ContactBubble from "./bubbles/ContactBubble";
import "./style.css";

function Contact() {
  return (
    <div className="contactContainer">
      <div className="titleContainer">
        <div className="titleText">
          <h1>Contact us</h1>
          <p>
            Feel free to contact us! We are always open to new project ideas,
            collaborations, and feedback - send us a message!
          </p>
        </div>
        <div className="mainContainer">
          <ContactBubble className="contactBubble"/>
          <div className="nameText">
            <p>Name:</p>
          </div>
          <input type="text" className="nameInput"/>
          <div className="emailText">
            <p>Email:</p>
          </div>
          <input type="text" className="emailInput"/>
          <div className="subjectText">
            <p>Subject:</p>
          </div>
          <input type="text" className="subjectInput"/>
          <div className="messageText">
            <p>Your Message:</p>
          </div>
          <textarea className="messageInput"/>
          <button type="submit" className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
