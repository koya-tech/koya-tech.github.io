// components/Skills.jsx
import { useTranslations } from "next-intl";
import { blogEnData, devToolsData, frameworkLibraryData, programingLanguageData } from "./data";

type SkillItem = {
    icons: JSX.Element;
    language: string;
};

type SkillsItemProps = {
    data: SkillItem[];
};

const Skill: React.FC<SkillsItemProps> = ({ data }) => {
    return (
        <div>
            <div className="flex flex-wrap">
                {data.map((lng, index) => {
                    return (
                        <div className="flex justify-center items-center gap-2 bg-slate-100 my-2 mr-4 p-4 rounded-lg w-40 h-10" key={index}>
                            {lng.icons}
                            <p className="font-bold">{lng.language}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

type BlogItem = {
    id: number;
    title: string;
    description: string;
    blogUrl: string;
};

type BlogsItemProps = {
    data: BlogItem[];
};


const Blog: React.FC<BlogsItemProps> = ({ data }) => {
    return (
        <div>
            {data.map((blog) => {
                return (
                    <div className="pr-4">
                        <a href={blog.blogUrl} className="">
                            <div className='flex border-2 rounded-md h-32 mt-4 items-stretch'>
                                <div className="m-4" key={blog.id}>
                                    <h3 className='font-bold text-2xl pb-3'>{blog.title}</h3>
                                    <p>{blog.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}


const Skills = () => {
    const t = useTranslations('Skill');
    return (
        <div className="pl-4">
            <div className="text-4xl font-bold py-4">
                <h2>{t('title')}</h2>
            </div>
            <div className="pl-5 pb-5">
                <p className="text-3xl text-emerald-800 font-bold">Programing Language</p>
                <Skill data={programingLanguageData} />
                <p className="text-3xl text-emerald-800 font-bold underline-offset-4">Framework / Library</p>
                <Skill data={frameworkLibraryData} />
                <p className="text-3xl text-emerald-800 font-bold underline-offset-4">Dev tools</p>
                <Skill data={devToolsData} />
            </div>
            <div className="text-4xl font-bold py-4">
                <h2>Blogs</h2>
            </div>
            <div className="flex pl-5 pb-5">
                <div className="w-1/2">
                    <p className="text-3xl text-emerald-800 font-bold">
                        English
                    </p>
                    <Blog data={blogEnData} />
                </div>
                <div className="w-1/2">
                    <p className="text-3xl text-emerald-800 font-bold">
                        Japanese
                    </p>
                    <Blog data={blogEnData} />
                </div>
            </div>
        </div>
    )
}

export default Skills;