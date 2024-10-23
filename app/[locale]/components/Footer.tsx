// components/Footer.tsx

import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer: React.FC = () => {
    const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };
    return (
        <>
            <hr className="my-4" />
            <div className="flex justify-between items-center py-4 bg-zinc-800 text-white">
                <p>
                    © {new Date().getFullYear()} Koya&apos;s Portfolio
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://twitter.com/koya_tech"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-inherit hover:text-blue-500"
                    >
                        <BsTwitter />
                    </a>
                    <a
                        href="https://github.com/koya-tech"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <BsGithub />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;

//
/* Footer */
// hr {
//     border: none;
//     background-color: #9B9C9D;
//     height: 1px;
//     width: 80%;
//     margin: 0 auto;
//   }
//   @media screen and (max-width: 768px) {
//     hr {
//       width: 100%;
//     }
//   }
//   .footer-container {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     padding: 2rem 0;
//     background-color: #1D1E20;
//   }
//   .footer-container p {
//     font-size: 0.8rem;
//     color: #9B9C9D;
//     padding: 0 2rem;
//   }
//   .footer-container .social_icons {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 0 2rem;
//   }

//   .footer-container .social_icons a {
//     color: #9B9C9D;
//     font-size: 1.5rem;
//     transition: all 0.5s ease-in-out;
//   }

//   .footer-container .social_icons a:hover {
//     color: #DADADB;
//   }
