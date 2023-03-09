import "./style.css";

function Home() {
  return (
    <>
      <div className="sloganContainer">
        <h1>
          We develop <span id="software">software</span>
          <br />
          for the good cause
        </h1>
      </div>
      <div className="motivationContainer">
        <h2>Our motivation</h2>
        <p>
          As a student initiative Coding for Society aims for positive societal
          impact through creating software projects with social value. Together
          as a motivated and interdisciplinary team of international students at
          the Technical University of Munich we work on projects that take on
          all shapes and colors.
        </p>
      </div>
      <div className="projectsContainer">
        <h2>Our latest projects</h2>
        <p>
          All of our projects focus on providing social value. We work together
          with other social teams and realize our own ideas.
        </p>
      </div>
      <div className="teamContainer">
        <h2>Our Team</h2>
        <p>
          We are an interdisciplinary team of committed students of the
          Technical University of Munich (TUM).
        </p>
      </div>
      <div className="contactContainer">
        <h2>Reach us</h2>
        <p>
          Feel free to contact us! We are always open to new project ideas,
          feedback or support.
        </p>
      </div>
    </>
  );
}

export default Home;