// components/Projects.jsx

import { useTranslations } from 'next-intl';
import { projectData } from './data';
import { BsGithub } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
    const t = useTranslations('Project');
    return (
        <div className="projects-container">
            <h2>{t('title')}</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <a href={project.demoUrl}>
                                <GoProjectSymlink />
                            </a>
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