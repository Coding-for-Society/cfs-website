import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBarBubble from "./bubbles/NavBarBubble";
import "./style.css";
import navConfig from "./config";

export default function NavigationBar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/home");

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="navBar">
      <div className="navBarLogo">
        <Link to="/home">
          <h1>Coding for Society.</h1>
        </Link>
      </div>
      <div className="navBarLinkContainer">
        <ul className="navBarLinks">
          {navConfig.map((navLink) => (
            <li key={navLink}>
              <Link
                className={
                  currentPage.startsWith(navLink.path) ? "activeLink" : ""
                }
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
        <NavBarBubble className="navBarBubble" />
      </div>
    </div>
  );
}
