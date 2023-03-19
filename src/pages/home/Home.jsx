import Wave from "react-wavify";
import { useEffect, useState } from "react";
import "./style.css";
import MotivationBubble from "./bubbles/MotivationBubble";
import ProjectBubble from "./bubbles/ProjectsBubble";
import ContactBubble from "./bubbles/ContactBubble";
import SloganBubble from "./bubbles/SloganBubble";
import TeamBubble from "./bubbles/TeamBubble";
import ProjectSlider from "../../components/projectSlider/ProjectSlider";
import { projectConfig, teamConfig } from "./config";
import TeamSlider from "../../components/teamSlider/TeamSlider";

function Home() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="homeContainer">
      <div className="waveContainer">
        <div className="waveStatic" style={{ height: `${150 + scroll}px` }} />
        <Wave
          id="backgroundWave"
          fill="#fff1e9 "
          paused={false}
          options={{
            height: 60,
            amplitude: 50,
            speed: 0.3,
            points: 4,
          }}
        />
      </div>
      <div className="sloganContainer">
        <div className="sloganText">
          <h1>
            We develop <span id="Software">software</span>
            <br />
            for the good cause
          </h1>
        </div>
        <SloganBubble className="sloganBubble" />
      </div>
      <div className="motivationContainer">
        <div className="motivationText">
          <h2>Our motivation</h2>
          <p>
            As a student initiative Coding for Society aims for positive
            societal impact through creating software projects with social
            value. Together as a motivated and interdisciplinary team of
            international students at the Technical University of Munich we work
            on projects that take on all shapes and colors.
          </p>
        </div>

        <MotivationBubble className="motivationBubble" />
      </div>
      <div className="projectsContainer">
        <div className="projectsText">
          <h2>Our latest projects</h2>
          <p>
            All of our projects focus on providing social value. We work
            together with other social teams and realize our own ideas.
          </p>
        </div>
        <ProjectSlider projects={projectConfig} />
        <ProjectBubble className="projectsBubble" />
      </div>
      <div className="teamContainer">
        <div className="teamText">
          <h2>Our Team</h2>
          <p>
            We are an interdisciplinary team of committed students of the
            Technical University of Munich (TUM).
          </p>
        </div>
        <TeamSlider team={teamConfig} />
        <TeamBubble className="teamBubble" />
      </div>
      <div className="contactContainer">
        <div className="contactText">
          <h2>Reach us</h2>
          <p>
            Feel free to contact us! We are always open to new project ideas,
            feedback or support.
          </p>
        </div>

        <ContactBubble className="contactBubble" />
      </div>
    </div>
  );
}

export default Home;
