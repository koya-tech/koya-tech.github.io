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
        title: 'How docker work on windows',
        description:
            'This article focused on "How Docker works on windows" and explain the system by using image',
        blogUrl: 'https://dev.to/koya-tech/how-docker-works-on-windows-1gn6',
    },
    {
        id: 2,
        title: 'Compound Pattern:React Design Pattern',
        description:
            'I introduced one of React’s design patterns — the compound pattern — and show how it can assist in solving these common problems.',
        blogUrl: 'https://medium.com/@koya9431ptr/compound-pattern-react-design-pattern-80e5cb2c2a1d',
    },
    {
        id: 3,
        title: 'Java Design Pattern:Credential Design',
        description: 'Design Patterns in Java solve design issues in specific contexts.In this article and next, I focus on “Credential Design Pattern”.',
        blogUrl: 'https://medium.com/@koya9431ptr/design-pattern-in-java-ed3bd331c195',
    }
];

export const blogJpData = [
    {
        id: 1,
        title: '【イラストで分かる】windowsで動くDockerの仕組み',
        description:
            'windows上でDockerが動く仕組みをイラストを使いながら解説した記事。',
        blogUrl: 'https://zenn.dev/koya_tech/articles/9ba0df8ca3e4d0',
    },
    {
        id: 2,
        title: '【イラストで分かる】Reactとライフサイクル',
        description:
            'Reactの実装においてライフサイクルは重要です。そのライフサイクルについて、イラストを用いながら説明した記事。',
        blogUrl: 'https://zenn.dev/koya_tech/articles/16d8b11b5062bd',
    },
    {
        id: 3,
        title: '【イラストで分かる】React Hook',
        description: 'よく使用されるReact hookについて、イラストを用いながら概要を説明した記事。',
        blogUrl: 'https://zenn.dev/koya_tech/articles/595d13699d1cdf',
    }
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

export const projectData = [
    {
        id: 1,
        title: 'Jatflix',
        description: {
            para1: 'Just A similar To Netflix.',
            para2: 'This is Netflix Clone App (UI).Created using react. When you click on the button, youtube video related to the work will play. The information for each ranking is obtained from The Movie DataBase (TMDB).'
        },
        gitHubLink: 'https://github.com/koya-tech/jatflix',
        demoUrl: 'https://jatflix-e6701.web.app/',
        imagePath: '/Screenshot 2024-09-20 105413.jpg',
        tech: [
            "React", "Firebase", "API"
        ]
    },
    {
        id: 2,
        title: 'Coming soon ...',
        description: {
            para1: '',
            para2: ''
        },
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