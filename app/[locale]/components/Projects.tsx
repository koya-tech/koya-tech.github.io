// components/Projects.jsx

import { useTranslations } from 'next-intl';
import { projectData } from './data';
import { BsGithub } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
    const t = useTranslations('Project');
    return (
        <div>
            <div className="pl-4">
                <div className="text-4xl font-bold py-4">
                    <h2>{t('title')}</h2>
                </div>
            </div>
            {projectData && projectData.map((project) => (
                <div className='flex border-2 rounded-md h-64 mt-4 items-stretch'>
                    <div className="m-4 p-3 w-3/4" key={project.id}>
                        <h3 className='font-bold text-2xl pb-3'>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className='flex gap-2 pt-2'>
                            <a href={project.demoUrl} className='pr-4'>
                                <GoProjectSymlink className='' />
                            </a>
                            <a href={project.gitHubLink}>
                                <BsGithub />
                            </a>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <img src={project.imagePath} alt="" className='rounded-lg object-cover h-full' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;