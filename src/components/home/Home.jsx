import {Background} from "../index";
import {Logo} from "../index";
import "./Home.css";


function Home() {
    return (<>
        <div className="Home">
            <div className="HomeLogo"><Logo/></div>
            <h3>Hi, we are</h3>
            <h1>Coding for Society.</h1>
            <h2>We develop software for the good.</h2>
            <p>We are a team of highly motivated students at the Technical University of Munich,
                who really want to <a className="internalLink">make a change</a>.
                We are proud to be one of the active projects of the student initiative <a className="externalLink" href="https://www.tum.de/studium/studienfinanzierung/stipendien/stipendien-der-tum/deutschlandstipendium/was-wir-machen/wir-engagieren-uns" target="_blank">Talente Spenden</a>.</p>
        </div>
        <Background/>
    </>
    );
}

export default Home;
