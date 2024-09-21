import { BiLogoCPlusPlus, BiLogoCss3, BiLogoDocker, BiLogoGit, BiLogoGithub, BiLogoGitlab, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoSlack, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import Career from "./Career";
import Projects from "./Projects";
import Skills from "./Skills";
import { DiJava } from "react-icons/di";
import { SiIntellijidea, SiJira } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";


export const blogEnData = [
    {
        id: 1,
        title: 'Jatflix',
        description:
            'Just A similar To Netflix. This is Netflix Clone App (UI).',
        blogUrl: 'https://jatflix-e6701.web.app/',
    },
    {
        id: 2,
        title: 'Jatflix',
        description:
            'Just A similar To Netflix. This is Netflix Clone App (UI).',
        blogUrl: 'https://jatflix-e6701.web.app/',
    },

];

export const devToolsData = [
    {
        icons: <BiLogoGit />,
        language: "Git",
    },
    {
        icons: <BiLogoGithub />,
        language: "Github",
    },
    {
        icons: <BiLogoGitlab />,
        language: "Gitlab",
    },
    {
        icons: <SiJira />,
        language: "Jira",
    },
    {
        icons: <BiLogoSlack />,
        language: "Slack"
    },
    {
        icons: <BiLogoDocker />,
        language: "Docker"
    },
    {
        icons: <VscVscode />,
        language: "VSCode",
    },
    {
        icons: <SiIntellijidea />,
        language: "IntelliJ",
    },
]

export const frameworkLibraryData = [
    {
        icons: <BiLogoReact />,
        language: "React",
    },
    {
        icons: <RiNextjsFill />,
        language: "Next.js",
    },
    {
        icons: <BiLogoNodejs />,
        language: "Node.js",
    },
    {
        icons: <BiLogoPostgresql />,
        language: "PostgreSQL",
    },
    {
        icons: <BiLogoTailwindCss />,
        language: "Tailwind CSS",
    },
]

export const programingLanguageData = [
    {
        icons: <BiLogoTypescript />,
        language: "Typescript",
    },
    {
        icons: <DiJava />,
        language: "Java",
    },
    {
        icons: <BiLogoPython />,
        language: "Python",
    },
    {
        icons: <BiLogoHtml5 />,
        language: "HTML",
    },
    {
        icons: <BiLogoCss3 />,
        language: "CSS",
    },
    {
        icons: <BiLogoJavascript />,
        language: "Javascript",
    },
    {
        icons: <PiFileSql />,
        language: "SQL",
    },
    {
        icons: <BiLogoCPlusPlus />,
        language: "C/C++",
    },
]

export const careerData = [
    {
        companyname: "Hitachi",
        companyLink: "https://www.hitachi.com/",
        position: "Software Engineer (Permanent)",
        startDate: "2022/04/01",
        endDate: "2024/07/26",
        bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit doloremque sapiente incidunt eligendi dolore.Dolorum obcaecati sed voluptatibus, in inventore excepturi aliquid aut iste maxime quam vel, esse quo voluptatem!",
        imagePath: "/Hitachi-Logo.jpg",
    },
    {
        companyname: "University of Tokyo",
        companyLink: "https://www.u-tokyo.ac.jp/en/",
        position: "Student (Master of Science)",
        startDate: "2020/04/01",
        endDate: "2022/03/31",
        bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit doloremque sapiente incidunt eligendi dolore.Dolorum obcaecati sed voluptatibus, in inventore excepturi aliquid aut iste maxime quam vel, esse quo voluptatem!",
        imagePath: "/Yasuda_Auditorium_-_Tokyo_University_3.jpg",
    },
    {
        companyname: "Kyushu University",
        companyLink: "https://www.kyushu-u.ac.jp/en/",
        position: "Student (Bachelor of Engineering)",
        startDate: "2016/04/01",
        endDate: "2020/03/31",
        bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit doloremque sapiente incidunt eligendi dolore.Dolorum obcaecati sed voluptatibus, in inventore excepturi aliquid aut iste maxime quam vel, esse quo voluptatem!",
        imagePath: "/pict-about-01-sp.jpg",
    },
]

export const projectData = [
    {
        id: 1,
        title: 'Jatflix',
        description:
            'Just A similar To Netflix. This is Netflix Clone App (UI).Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit doloremque sapiente incidunt eligendi dolore.Dolorum obcaecati sed voluptatibus, in inventore excepturi aliquid aut iste maxime quam vel, esse quo voluptatem!',
        gitHubLink: 'https://github.com/koya-tech/jatflix',
        demoUrl: 'https://jatflix-e6701.web.app/',
        imagePath: '/Screenshot 2024-09-20 105413.jpg'
    },
    {
        id: 2,
        title: 'Coming soon ...',
        description:
            'I am in the process of making it Just A similar To Netflix. This is Netflix Clone App (UI).Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit doloremque sapiente incidunt eligendi dolore.Dolorum obcaecati sed voluptatibus, in inventore excepturi aliquid aut iste maxime quam vel, esse quo voluptatem!',
        gitHubLink: '',
        demoUrl: '',
        imagePath: '',
    },

];

export const tabData = [
    {
        id: 1,
        title: 'My Carrier',
        content: <Career />
    },
    {
        id: 2,
        title: 'Skills / Blogs',
        content: <Skills />
    },
    {
        id: 3,
        title: 'Projects',
        content: <Projects />
    },
]