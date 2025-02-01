import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
    const location = useLocation();
    const websiteName = "Gratitute";

    useEffect(() => {
        const routeTitles = {
            "/": `${websiteName} - Home`,
            "/about": `${websiteName} - About`,
            "/message-wall": `${websiteName} - Message Wall`,
            "/send-a-message": `${websiteName} - Send a Message to God`,
        };

        document.title = routeTitles[location.pathname] || websiteName;
    }, [location]);

    return null;
};

export default PageTitle;
