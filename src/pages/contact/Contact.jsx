import ContactBubble from "./bubbles/ContactBubble";
import SubmitButton from "./SubmitButton/SubmitButton";
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
          <div className="nameInput">
            <input type="text"/>
          </div>
          <div className="emailText">
            <p>Email:</p>
          </div>
          <div className="emailInput">
            <input type="text"/>
          </div>
          <div className="subjectText">
            <p>Subject:</p>
          </div>
          <div className="subjectInput">
            <input type="text"/>
          </div>
          <div className="messageText">
            <p>Your Message:</p>
          </div>
          <div className="messageInput">
            <input type="text"/>
          </div>
          <div className="submitBtn">
            <div className="submitText">
              <h3>Submit</h3>
            </div>
            <SubmitButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
