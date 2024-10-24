// components/Projects.jsx

import { useLocale, useTranslations } from 'next-intl';
import { projectData } from './data';
import { BsGithub } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { Limelight } from 'next/font/google';
import { unstable_setRequestLocale } from 'next-intl/server';

type SkillsItemProps = {
    data: string[];
};

const ProjectSkill: React.FC<SkillsItemProps> = ({ data }) => {
    return (
        <div className="flex flex-wrap">
            {data.map((lng, index) => {
                return (
                    <div className="flex justify-center items-center gap-2 bg-slate-100 my-2 mr-4 p-4 rounded-lg w-40 h-10" key={index}>
                        <p className="font-bold">{lng}</p>
                    </div>
                )
            })}
        </div>
    )
}

const Projects = () => {
    const locale = useLocale();

    // Set the locale to enable static rendering
    unstable_setRequestLocale(locale);
    const t = useTranslations('Project');
    return (
        <div className="w-full px-4">
            <div className="mb-4">
                <div className="text-2xl md:text-4xl font-bold py-4">
                    <h2>{t('title')}</h2>
                </div>
            </div>
            {projectData && projectData.map((project) => (
                <div key={project.id} className='flex flex-col md:flex-row border-2 rounded-md min-h-[16rem] mb-6 overflow-hidden'>
                    <div className="p-4 md:w-3/4 flex flex-col">
                        <h3 className='font-bold text-xl md:text-2xl pb-3 truncate'>
                            {project.title}
                        </h3>
                        <p className="text-sm md:text-base flex-grow line-clamp-4 md:line-clamp-6">
                            {project.description.para1}
                        </p>
                        <p className="text-sm md:text-base flex-grow line-clamp-4 md:line-clamp-6">
                            {project.description.para2}
                        </p>
                        {project.gitHubLink && (
                            <div className='flex gap-4 pt-4 text-xl md:text-2xl'>
                                <a
                                    href={project.demoUrl}
                                    className='hover:opacity-70 transition-opacity'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GoProjectSymlink />
                                </a>
                                <a
                                    href={project.gitHubLink}
                                    className='hover:opacity-70 transition-opacity'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsGithub />
                                </a>
                            </div>
                        )}

                        <div>
                            <ProjectSkill data={project.tech ? project.tech : []} />
                        </div>
                    </div>
                    <div className='h-48 md:h-auto md:w-1/4'>
                        <img
                            src={project.imagePath ? project.imagePath : '/comingSoon.jpg'}
                            alt={project.title}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;