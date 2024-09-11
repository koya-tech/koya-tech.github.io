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