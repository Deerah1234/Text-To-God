import { Outlet, useLocation } from "react-router-dom";
import Header from "./common/Header";
import { BgVideo, Footer, PageTitle } from ".";

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isAbout = location.pathname === "/about";

    return (
        <div className="relative w-full min-h-screen">
            <PageTitle />
            {isHome && <BgVideo />}

            <Header />
            <main className="px-16 my-16 flex-grow">
                <Outlet />
            </main>

            {isAbout && <Footer />}
        </div>
    );
};
export default Layout;
