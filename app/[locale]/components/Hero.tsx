// components/Hero.jsx
"use client"

import { useTranslations } from "next-intl";
import { BsTwitterX } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { tabData } from "./data";
import { useContext, useState } from "react";
import { TabContext } from "./TabContext";

let activeTabState = tabData[0].id;

const Hero = () => {
    const t = useTranslations('Hero');
    const { activeTab, setActiveTab } = useContext(TabContext);

    return (
        <div className="hero-container">
            <div className="backgroundImage">
                <img src="/lucy-claire-anEgzevL0Pk-unsplash.jpg" alt="backgroundOfHero" className="profile-backgroundImage" />
            </div>

            <img src="/bet1S7zthGoGnzw1682376001_1682376004.jpg" width={300} height={300} alt="Koya's personal headshot" className="profile-img" />

            <div className="hero-text">
                <p className="font-bold font-3xl">{t('name')}</p>
                <p className="text-lg">{t('greeting')}</p>

                <div className='tab-menu py-7'>
                    <p className="font-bold font-3xl">Portfolio Content</p>
                    {tabData.map((data, index) => (
                        <button
                            key={data.id}
                            onClick={() => setActiveTab(data.id)}
                            className={`text-2xl flex pb-2 ${activeTab === data.id && 'underline'}`}>
                            {data.title}
                        </button>
                    ))}
                </div>

                <div className="get-in-touch">
                    <p className="font-bold font-3xl">Get In Touch</p>
                    <div className="social-icons">
                        <a
                            href="https://twitter.com/koya_tech"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center pb-2"
                        >
                            <BsTwitterX />
                            <div className="pl-2">X</div>
                        </a>
                        <a
                            href="https://github.com/koya-tech"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center pb-2"
                        >
                            <BsGithub />
                            <div className="pl-2">Github</div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/koya-hiura-9aa75b31a/"
                            aria-label="LinkeIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <BsLinkedin />
                            <div className="pl-2">Linked In</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Hero, activeTabState as activeTab };