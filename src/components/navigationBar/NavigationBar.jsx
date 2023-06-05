import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBarBubble from "./bubbles/NavBarBubble";
import "./style.css";
import navConfig from "./config";

export default function NavigationBar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("/home");
  const [open, setOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  });

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="navBar">
      <div className="navBarLogo">
        <Link to="/home">
          <h1>Coding for Society.</h1>
        </Link>
      </div>
      {width < 800 ? (
        <div>
          <button type="button" onClick={toggleOpen}>
            Open
          </button>
          {open && <h1 style={{ color: "white" }}>Yaaaaaay!</h1>}
        </div>
      ) : (
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
      )}
    </div>
  );
}
