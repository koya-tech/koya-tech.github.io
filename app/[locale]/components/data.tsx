// components/data.js

import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export const projectData = [
    {
        id: 1,
        title: 'Jatflix',
        description:
            'Just A similar To Netflix. This is Netflix Clone App (UI).',
        gitHubLink: 'https://github.com/koya-tech/jatflix',
        demoUrl: 'https://jatflix-e6701.web.app/'
    },
    {
        id: 2,
        title: 'Coming soon ...',
        description:
            'I am in the process of making it',
        gitHubLink: '',
        demoUrl: ''
    },

];
export const tabData = [
    {
        id: 1,
        title: 'About Me',
        content: <About />
    },
    {
        id: 2,
        title: 'Skills',
        content: <Skills />
    },
    {
        id: 3,
        title: 'My Carrier',
        content: <div>My Career Content</div>
    },
    {
        id: 4,
        title: 'Projects',
        content: <Projects />
    },
]