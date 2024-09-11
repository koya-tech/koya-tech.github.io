// components/Hero.jsx

import { useTranslations } from "next-intl";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
    const t = useTranslations('Hero');
    return (
        <div className="hero-container">
            <video src="/black_-_13495 (540p).mp4" className="profile-video" autoPlay loop muted playsInline></video>
            <img src="/bet1S7zthGoGnzw1682376001_1682376004.jpg" width={300} height={300} alt="Koya's personal headshot" className="profile-img" />
            <div className="hero-text">
                <h1>{t('name')}</h1>
                <p>{t('greeting')}</p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/koya_tech"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <BsTwitter />

                    </a>
                    <a
                        href="https://github.com/koya-tech"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;