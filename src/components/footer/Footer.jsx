import { Link } from "react-router-dom";
import FooterBubble from "./FooterBubble";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footerColumns">
        <div className="logoColumn">
          <h2 className="logoText">Coding for Society.</h2>
          <div>
            <Link to="/apply" className="applyLink">Apply</Link>
            <Link to="/contact" className="contactLink">Contact</Link>
          </div>
        </div>
        <div className="footerColumn">
          <h3 className="linksText">Links</h3>
          <ul>
            <li><Link to="/projects" className="projectsLink">Our Projects</Link></li>
            <li><Link to="/team" className="teamLink">Our Team</Link></li>
            <li><Link to="/goals" className="goalsLink">Our Goals</Link></li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3 className="contactText">Contact</h3>
          <ul>
            <li><Link to="mailto:hello@codingforsociety.com" className="mailLink">E-Mail</Link></li>
            <li><Link to="https://www.instagram.com" className="instagramLink">Instagram</Link></li>
            <li><Link to="https://www.linkedin.com/company/coding-for-society/" className="linkedinLink">Linkedin</Link></li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3 className="otherText">Other</h3>
          <ul>
            <li><Link to="https://www.tum.de/studium/studienfinanzierung/stipendien/stipendien-der-tum/deutschlandstipendium/was-wir-machen/wir-engagieren-uns/" className="tsLink">Talente Spenden</Link></li>
            <li><Link to="https://www.tum.de/studium/studienfinanzierung/stipendien/stipendien-der-tum/deutschlandstipendium/" className="dlsLink">TUM Deutschlandstipendium</Link></li>
            <li><Link to="/imprint" className="imprintLink">Imprint</Link></li>
          </ul>
        </div>
      </div>
      <FooterBubble className="footerBubble" preserveAspectRatio="none" />
    </footer>
  );
}

export default Footer;
