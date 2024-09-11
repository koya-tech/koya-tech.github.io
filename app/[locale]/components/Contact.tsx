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