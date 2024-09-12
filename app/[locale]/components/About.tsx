import { useTranslations } from "next-intl";

const About = () => {
    const t = useTranslations('About');
    return (
        <div className="about-container">
            <h2>{t('title')}</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        {t('para1')}
                    </p>
                    <p>{t('para2')}</p>
                </div>
                <div className="about-img">
                    <img src='/neom-kXbit_yx8t4-unsplash.jpg' width={300} height={300} alt="Koya's aboutshot" className="profile-img" />

                </div>
            </div>
        </div>
    )
}

export default About;