// components/Contact.jsx

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Get In Touch</h2>
            <p>I'm not open to the job. However, I welcome your reaction for production, opinion, etc. <br />
                If you want to contact me, please do by X (Twitter). <br />
                <s>
                    If you want us to work together, have any questions or want me to speak at your event, my inbox is always open.
                    Whether I just want to say hi, I'll try my best to get back to you! Cheers!
                </s>
            </p>
            <a href="https://twitter.com/koya_tech" className='cta-btn'>Say Hello</a>
        </div>
    )
}

export default Contact;