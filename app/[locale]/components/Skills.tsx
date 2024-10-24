// components/Skills.jsx
import { useLocale, useTranslations } from "next-intl";
import { blogEnData, blogJpData, devToolsData, frameworkLibraryData, programingLanguageData } from "./data";
import { unstable_setRequestLocale } from "next-intl/server";

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
        <div className="w-full px-4">
            {data.map((blog) => {
                return (
                    <div key={blog.id} className="mb-4">
                        <a href={blog.blogUrl}>
                            <div className='flex border-2 rounded-md min-h-[8rem] items-stretch'>
                                <div className="p-4 w-full overflow-hidden">
                                    <h3 className='font-bold text-xl md:text-2xl pb-2 truncate'>
                                        {blog.title}
                                    </h3>
                                    <p className="line-clamp-2 text-sm md:text-base">
                                        {blog.description}
                                    </p>
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
    const locale = useLocale();

    // Set the locale to enable static rendering
    // unstable_setRequestLocale(locale);
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
                        {t('BlogLang.eng')}
                    </p>
                    <Blog data={blogEnData} />
                </div>
                <div className="w-1/2">
                    <p className="text-3xl text-emerald-800 font-bold">
                        {t('BlogLang.jp')}
                    </p>
                    <Blog data={blogJpData} />
                </div>
            </div>
        </div>
    )
}

export default Skills;