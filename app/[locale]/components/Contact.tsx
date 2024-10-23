// components/Contact.jsx

import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations('GetInTouch');
    return (
        <div className="contact-container">
            <h2>{t('title')}</h2>
            <p>
                {t('body')}
            </p>
            <a href="https://twitter.com/koya_tech" className='cta-btn'>Say Hello</a>
        </div>
    )
}

export default Contact;

// cta-btn css
// .cta-btn {
//     background-color: #ffffff;
//     color: #1D1E20;
//     padding: 0.5rem 1rem;
//     border-radius: 5px;
//     font-size: 1rem;
//     font-weight: 600;
//     transition: all 0.5s ease-in-out;
//     cursor: pointer;
//     display: inline-block;
//   }

//   .cta-btn:hover {
//     background-color: #DADADB;
//   }

// .contact-container h2 {
//     font-size: 2rem;
//     font-weight: 600;
//     margin-bottom: 1rem;
//   }

//   .contact-container p {
//     font-size: 1rem;
//     font-weight: 400;
//     margin-bottom: 1rem;
//     text-align: center;
//   }

// .contact-container {
//     padding: 2rem 0 4rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     width: 80%;
//     margin: 0 auto;
//   }