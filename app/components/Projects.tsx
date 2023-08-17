// components/Projects.jsx

import { projectData } from './data';
import { BsGithub } from "react-icons/bs";
import { BiSolidFolderOpen } from "react-icons/bi";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <BiSolidFolderOpen />
                            <div className="small-icons">
                                <a href={project.gitHubLink}>
                                    <BsGithub />
                                </a>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;