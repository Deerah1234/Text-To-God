import { Outlet, useLocation } from "react-router-dom";
import Header from "./common/Header";
import { Footer, PageTitle, NavTitle } from ".";

const Layout = () => {
    const location = useLocation();

    const pageTitles = {
        "/": "Home",
        "/about": "About",
        "/send-a-message": "Write a Message",
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col">
            {/* Title Bar (Fixed on All Pages) */}
            <NavTitle route={pageTitles[location.pathname] || "Page"} />

            <PageTitle />

            {/* {location.pathname === "/" && <BgVideo />} */}

            <Header />

            {/* Page Content */}
            <main className="mt-16 md:mt-20 min-[766px]:px-24 px-3 lg:px-[258px] py-10 flex-grow">
                <Outlet />
            </main>

            {/* Footer only on the About Page */}
            <Footer />
        </div>
    );
};

export default Layout;
