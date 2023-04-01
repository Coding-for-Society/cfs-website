import Wave from "react-wavify";
import { useEffect, useState } from "react";
import "./style.css";
import MotivationBubble from "./bubbles/MotivationBubble";
import ProjectBubble from "./bubbles/ProjectsBubble";
import ContactBubble from "./bubbles/ContactBubble";
import SloganBubble from "./bubbles/SloganBubble";
import TeamBubble from "./bubbles/TeamBubble";
import ProjectSlider from "../../components/projectSlider/ProjectSlider";
import { projectConfig, teamConfig } from "../../config";
import TeamSlider from "../../components/teamSlider/TeamSlider";

function Home() {
  const [scroll, setScroll] = useState(0);
  const [activeCount, setActiveCount] = useState(1);

  const activateBubbles = () => {
    if (scroll <= 100) {
      setActiveCount(1);
    } else if (scroll <= 650) {
      setActiveCount(2);
    } else if (scroll <= 1500) {
      setActiveCount(3);
    } else if (scroll <= 2300) {
      setActiveCount(4);
    } else if (scroll <= 3000) {
      setActiveCount(5);
    }
  };

  const handleScroll = () => {
    setScroll(window.pageYOffset);
    activateBubbles();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="homeContainer">
      <div className="homeContainerBackground" />
      <div className="waveContainer">
        <div
          className="waveStatic"
          style={{ height: `${150 + (scroll / 2000) * 2380}px` }}
        />
        <Wave
          id="backgroundWave"
          fill="#fff1e9"
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
        <div className="sloganBubbleText">
          <h1>
            We develop <span id="Software">software</span>
            <br />
            for the good cause
          </h1>
        </div>
        <SloganBubble className="sloganBubble" />
      </div>
      <div className="motivationContainer">
        <div className="motivationBubbleText">
          <h2>Our motivation</h2>
          <p>
            As a student initiative Coding for Society aims for positive
            societal impact through creating software projects with social
            value. Together as a motivated and interdisciplinary team of
            international students at the Technical University of Munich we work
            on projects that take on all shapes and colors.
          </p>
        </div>

        <MotivationBubble
          className="motivationBubble"
          active={activeCount >= 2}
        />
      </div>
      <div className="projectsContainer">
        <div className="projectsBubbleText">
          <h2>Our latest projects</h2>
          <p>
            All of our projects focus on providing social value. We work
            together with other social teams and realize our own ideas.
          </p>
        </div>
        <ProjectSlider projects={projectConfig} />
        <ProjectBubble className="projectsBubble" active={activeCount >= 3} />
      </div>
      <div className="teamContainer">
        <div className="teamBubbleText">
          <h2>Our Team</h2>
          <p>
            We are an interdisciplinary team of committed students of the
            Technical University of Munich (TUM).
          </p>
        </div>
        <TeamSlider team={teamConfig} />
        <TeamBubble className="teamBubble" active={activeCount >= 4} />
      </div>
      <div className="contactContainer">
        <div className="contactBubbleText">
          <h2>Reach us</h2>
          <p>
            Feel free to contact us! We are always open to new project ideas,
            feedback or support.
          </p>
          <a href="mailto:hello@codingforsociety.com">
            hello@codingforsociety.com
          </a>
        </div>

        <ContactBubble className="contactBubble" active={activeCount >= 5} />
      </div>
    </div>
  );
}

export default Home;
