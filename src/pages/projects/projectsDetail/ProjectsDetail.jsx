import { useParams, Link } from "react-router-dom";
import ProjectsDetailBubble from "./bubbles/ProjectsDetailBubble";
import { projectConfig } from "../../../config";
import "./style.css";

export default function ProjectsDetail() {
  const { id } = useParams();

  const project = projectConfig.find((p) => p.id === id);

  return (
    <div className="projectDetailContainer">
      <h1 className="projectDetailHeading">Our Projects</h1>
      <div className="projectDetailContentContainer">
        <div className="projectDetailContent">
          <h2>{project.name}</h2>
          <div className="projectDetailGrid">
            <div className="projectDetailImageContainer">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="projectDetailGridText">
              <p>{project.desc}</p>
            </div>
          </div>
          <Link className="projectDetailBack" to="/projects">
            x
          </Link>
        </div>
        <ProjectsDetailBubble
          className="projectDetailBubble"
          preserveAspectRatio="none"
        />
      </div>
    </div>
  );
}
