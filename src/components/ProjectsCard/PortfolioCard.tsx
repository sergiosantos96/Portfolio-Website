import { projects } from "./ProjectsCardData";
import "./ProjectsCard.scss";

export interface ProjectModel {
  name: string;
  image: string;
  githubRepo: string;
}

const ProjectsCard: React.FC = () => {
  return (
    <div className="projectspage">
      {projects.map((project, index) => (
        <div className="projectspage__card" key={index}>
          <a
            className="projectspage__card-link"
            href={project.githubRepo}
            target="_blank"
          >
            <img
              src={project.image}
              alt={project.name}
              className="projectspage__card-image"
            />
            <div className="projectspage__card-overlay">
              <div className="projectspage__card-details">
                <h3>{project.name}</h3>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCard;
