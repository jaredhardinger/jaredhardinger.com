import { Card } from "antd";
import linkIcon from "../../../assets/linkIcon.png";
import linkIconHover from "../../../assets/linkIconHover.png";
import "./project.scss";

function Project({ project }) {
  const { title, description, img, github, website, tech } = project;

  const cardTitle = (
    <div className="card-title">
      {title}
      <div className="links">
        {website && (
          <a
            className="website-link"
            href={website}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="link-icon"
              src={linkIcon}
              alt="An illustrated link"
            />
            <img
              className="link-icon-hover"
              src={linkIconHover}
              alt="An illustrated link"
            />
          </a>
        )}
        <a href={github} rel="noopener noreferrer" target="_blank">
          <i className="devicon-github-original"></i>
        </a>
      </div>
    </div>
  );

  return (
    <Card title={cardTitle} className="project">
      <div className="images">
        {img.map((i, idx) => (
          <img src={i} key={idx} alt={title} />
        ))}
      </div>
      <div className="description">{description}</div>
      <div className="tech-stack">
        {tech.map((t, idx) => (
          <i key={idx} className={`devicon-${t}`}></i>
        ))}
      </div>
    </Card>
  );
}

export default Project;
