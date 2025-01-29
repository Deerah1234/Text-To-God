import { Button } from "@/components/ui/button";
import NavbarItems from "@/constants";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation(); // Get the current route path

    return (
        <div className="relative z-[1] flex items-center justify-between p-3 backdrop-blur-sm shadow-sm border-b border-white/20">
            {/* Logo */}
            <Link to="/">
                <img
                    src="/logotext2.svg"
                    alt="TextToGodLogo"
                    className="w-28"
                />
            </Link>

            {/* Menus */}
            <div className="flex items-center justify-center gap-5">
                {NavbarItems.map((item) => (
                    <div key={item.id} className="text-base">
                        <Link
                            to={item.link}
                            className={`hover:text-[#003366] hover:font-bold ${
                                location.pathname === item.link
                                    ? "text-[#003366] font-bold"
                                    : "text-gray-500"
                            }`}
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <Button className="flex items-center justify-center bg-[#003366] hover:text-[#003366] hover:bg-white hover:shadow-sm">
                <Link to="/send-a-message">Write a Message</Link>
            </Button>
        </div>
    );
};

export default Navbar;
