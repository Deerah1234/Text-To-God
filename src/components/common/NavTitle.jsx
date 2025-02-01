import { Link } from "react-router-dom";

const NavTitle = ({ route }) => {
    return (
        <div className="fixed top-0 left-0 right-0 py-4 px-6 flex items-center justify-center md:justify-center w-full z-10 bg-white/30 backdrop-blur-md border-white/20">
            {/* Logo (Only Centered on Mobile) */}
            <Link to="/" className="md:absolute md:left-6 flex items-center">
                <img
                    src="/logotext2.svg"
                    alt="TextToGodLogo"
                    className="w-28 md:w-32"
                />
            </Link>

            {/* Page Title (Hidden on Mobile, Centered on Large Screens) */}
            <h1 className="hidden md:block text-lg font-semibold text-[#003366] capitalize">
                {route}
            </h1>
        </div>
    );
};

export default NavTitle;
