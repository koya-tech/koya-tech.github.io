// components/Hero.jsx
"use client"

import { BsTwitterX, BsX } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { tabData } from "./data";
import { useContext, useState } from "react";
import { TabContext } from "./TabContext";
import Buymeacoffee from "./BuyMeCoffee";

let activeTabState = tabData[0].id;

const Hero = () => {
    const { activeTab, setActiveTab } = useContext(TabContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-[#022c22]/[.85]  md:h-screen text-white">

            <div className="inset-0 hidden md:block">
                <img src="/lucy-claire-anEgzevL0Pk-unsplash.jpg" alt="backgroundOfHero" className="-z-10 absolute object-cover h-screen" />
            </div>

            <div className="flex justify-center py-4">
                <img
                    src="/bet1S7zthGoGnzw1682376001_1682376004.jpg"
                    alt="Koya's personal headshot"
                    className="rounded-full w-36 h-36 object-cover"
                />
            </div>

            <div className="md:hidden z-10 flex justify-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl p-2">
                    {isMenuOpen ? <BsX /> : <GiHamburgerMenu />}
                </button>
            </div>

            <div className={`mx-8 md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
                {/* <p className="font-bold text-2xl pb-4">{t('name')}</p> */}
                <p className="font-bold text-2xl pb-4">Koya_Tech</p>
                {/* <p className="text-2xl pb-6">{t('greeting')}</p> */}
                <p className="text-2xl pb-6">Software Engineer based in Vancouver, Canada.</p>
                <div className='py-7 text-2xl'>
                    <p className="font-bold text-xl pb-4">Portfolio Content</p>
                    <div className="pb-6">
                        {tabData.map((data, index) => (
                            <button
                                key={data.id}
                                onClick={() => setActiveTab(data.id)}
                                className={`text-2xl flex pb-3 ${activeTab === data.id && 'underline'}`}>
                                {data.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="">
                    <p className="font-bold text-2xl pb-4">Get In Touch</p>
                    <div className="pb-6 text-xl">
                        <a
                            href="https://twitter.com/koya_tech"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center pb-3 hover:underline"
                        >
                            <BsTwitterX />
                            <div className="pl-2">X</div>
                        </a>
                        <a
                            href="https://github.com/koya-tech"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center pb-3 hover:underline"
                        >
                            <BsGithub />
                            <div className="pl-2">Github</div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/koya-hiura-9aa75b31a/"
                            aria-label="LinkeIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center pb-3 hover:underline"
                        >
                            <BsLinkedin />
                            <div className="pl-2">Linked In</div>
                        </a>
                        <Buymeacoffee />
                    </div>
                </div>
            </div>
        </div>
        // </div >
    )
}

export { Hero, activeTabState as activeTab };