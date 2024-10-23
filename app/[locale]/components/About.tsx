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

//css
/* @media screen and (max-width: 768px) {
.about-container .flex-about {
    flex-direction: column;
}

.about-container .flex-about .about-text {
    width: 100%;
}

.about-container .flex-about .about-img {
    width: 100%;
}
} */

  /* About */
// .about-container {
//     padding: 2rem 0;
//   }

//   .about-container h2 {
//     font-size: 2rem;
//     font-weight: 600;
//     margin-bottom: 1rem;
//   }

//   .about-container .flex-about {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 0 2rem;
//   }
 
//   .about-container .flex-about .about-text {
//     width: 50%;
//   }

//   .about-container .flex-about .about-text p {
//     font-size: 1rem;
//     font-weight: 400;
//     margin-bottom: 1rem;
//   }

//   .about-container .flex-about .about-img {
//     width: 50%;
//   }

//   .about-container .flex-about .about-img .profile-img {
//     overflow: hidden;
//     width: 100%;
//     height: 500px;
//     object-fit: cover;
//     border: 2px solid #DADADB;
//     filter: grayscale(100%);
//     transition: all 0.5s ease-in-out;
//     cursor: cell;
//   }