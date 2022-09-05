// Stylesheet
import "./NavigationBar.css"
// Components
import {Link, useLocation} from 'react-router-dom';
import React, {useEffect, useState} from "react";

function NavigationBar() {
    // Current url using react router's useLocation
    const location = useLocation();
    // Giving State to the list of navigation Bar Links
    let [links, setLinks] = useState(["false","false","false","false","false"]);

    // Update the active navigation bar marked on change of the current url
    useEffect(() => {
        // Default: All off
        let activeLinks = ["false", "false", "false", "false", "false"];

        if (location.pathname === "/") {
            activeLinks[0] = "true";
        } else if (location.pathname === "/projects") {
            activeLinks[1] = "true";
        } else if (location.pathname === "/team") {
            activeLinks[2] = "true";
        } else if (location.pathname === "/story") {
            activeLinks[3] = "true";
        } else if (location.pathname === "/contact") {
            activeLinks[4] = "true";
        }

        setLinks(activeLinks);
    }, [location.pathname]);


    return (
        <>
            <header className="NavigationBar">
                <h1></h1>
                <nav>
                    <ul className="NavLinks">
                        <li active={links[0]}>
                            <div className="NavigationBarSpace">
                                <div className="NavigationBarActive"/>
                            </div>
                            <Link to="/">Home</Link></li>
                        <li active={links[1]}>
                            <div className="NavigationBarSpace">
                                <div className="NavigationBarActive"/>
                            </div>
                            <Link to="/projects">Projects</Link></li>
                        <li active={links[2]}>
                            <div className="NavigationBarSpace">
                                <div className="NavigationBarActive"/>
                            </div>
                            <Link to="/team">The Team</Link></li>
                        <li active={links[3]}>
                            <div className="NavigationBarSpace">
                                <div className="NavigationBarActive"/>
                            </div>
                            <Link to="/story">Our Story & Goals</Link></li>
                        <li active={links[4]}>
                            <div className="NavigationBarSpace">
                                <div className="NavigationBarActive"/>
                            </div>
                            <Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <h1></h1>
            </header>
        </>
    )
}

export default NavigationBar;
