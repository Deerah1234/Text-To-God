import { Link, useLocation } from "react-router-dom";
import { MessageSquare, InfoIcon, PenSquare, LucideHome } from "lucide-react";
import NavbarItems from "@/constants";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const location = useLocation();

    // Map menu items to icons
    const handleIconChange = (title) => {
        switch (title) {
            case "Home":
                return <LucideHome size={28} />;
            case "Write":
                return <PenSquare size={28} />;
            case "Messages":
                return <MessageSquare size={28} />;
            case "About":
                return <InfoIcon size={28} />;
            default:
                return null;
        }
    };

    return (
        <>
            {/* DESKTOP NAVBAR - Left Sidebar */}
            <nav className="hidden md:flex md:fixed md:left-0 md:top-0 md:h-full md:w-20 flex-col items-center py-5">
                {/* Logo */}
                {/* <Link to="/" className="mb-10">
                    <img
                        src="/logotext2.svg"
                        alt="TextToGodLogo"
                        className="w-12"
                    />
                </Link> */}

                {/* Menu Items */}
                <div className="flex flex-col gap-10 w-full my-auto">
                    {NavbarItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            className={cn(
                                "flex flex-col items-center justify-center p-3 rounded-r-lg transition-all hover:text-[#003366]",
                                location.pathname === item.link
                                    ? "text-[#003366] bg-[#E4E7F0]/50 font-bold"
                                    : "text-gray-500"
                            )}
                        >
                            {handleIconChange(item.title)}
                            <span className="text-sm">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            {/* MOBILE NAVBAR - Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md border-t border-white/20 p-3 md:hidden flex justify-around items-center">
                {NavbarItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.link}
                        className={cn(
                            "flex flex-col items-center justify-center transition-all hover:text-[#003366]",
                            location.pathname === item.link
                                ? "text-[#003366] font-bold"
                                : "text-gray-500"
                        )}
                    >
                        {handleIconChange(item.title)}
                        <span className="text-xs">{item.title}</span>
                    </Link>
                ))}
            </nav>
        </>
    );
};

export default Navbar;
