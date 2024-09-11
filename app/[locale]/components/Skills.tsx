// components/Skills.jsx

import { DiReact } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { useTranslations } from "next-intl";

const Skills = () => {
    const t = useTranslations('Skill');
    return (
        <div className="skills-container">
            <h2>{t('title')}</h2>
            <div className="grid-skills">
                <div className="skill-card nextjs">
                    <TbBrandNextjs />
                    <p>Nextjs</p>
                </div>
                <div className="skill-card react">
                    <DiReact />
                    <p>React</p>
                </div>
                <div className="skill-card typescript">
                    <BiLogoTypescript />
                    <p>Typescript</p>
                </div>
                <div className="skill-card java">
                    <DiJava />
                    <p>Java</p>
                </div>
                <div className="skill-card python">
                    <BiLogoPython />
                    <p>Python</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;