// Stylesheet
import "./NavigationBar.css"
// Components
import {Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <>
            <header className="NavigationBar">
                <h1></h1>
                <nav>
                    <ul className="NavLinks">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/team">The Team</Link></li>
                        <li><Link to="/story">Our Story & Goals</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <h1></h1>
            </header>
        </>
    )
}

export default NavigationBar;
