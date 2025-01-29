import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const routeTitles = {
            "/": "Talk To God - Home",
            "/about": "Talk To God - About",
            "/message-wall": "Talk To God - Message Wall",
            "/send-a-message": "Talk To God - Send a Message to God",
        };

        document.title = routeTitles[location.pathname] || "Talk To God";
    }, [location]);

    return null; // This component doesn't render anything
};

export default PageTitle;
