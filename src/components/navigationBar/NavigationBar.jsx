import { Link } from "react-router-dom";
import NavBarBubble from "./bubbles/NavBarBubble";
import "./style.css";

export default function NavigationBar() {
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <Link to="/home">
          <h1>Coding for Society.</h1>
        </Link>
      </div>
      <div className="navBarLinkContainer">
        <ul className="navBarLinks">
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/goals">Goals</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/apply">Apply</Link>
          </li>
        </ul>
        <NavBarBubble className="navBarBubble" />
      </div>
    </div>
  );
}
