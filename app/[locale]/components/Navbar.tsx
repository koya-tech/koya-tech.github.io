// components/Navbar.jsx

import Link from "next/link";
import LocaleSwitcher from "../LocaleComponents/LocaleSwitcher";

const Navbar: React.FC = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-zinc-800 text-white">
            <div className="font-bold text-lg">
                <Link href="/" legacyBehavior>
                    <a>Koya&apos;s Portfolio</a>
                </Link>
            </div>
            <LocaleSwitcher />
            {/* <a href="#" className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">Resume</a> */}
            {/* <a href="#" className="cta-btn">Resume</a> */}
        </div>
    )
}

export default Navbar;
