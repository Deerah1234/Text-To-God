const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 mt-auto w-full border-t-2">
            <div className="w-full max-w-full px-16 mx-auto py-4 md:py-6">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://koyimages.com/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        {/* <img
                            src="/logo.svg" // Replace with your actual logo path
                            className="h-8"
                            alt="KoyImages Logo"
                        /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            KoyImages
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="https://koyimages.com/"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </a>
                        </li>
                        {/* <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Privacy Policy
                            </a>
                        </li> */}
                        {/* <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Licensing
                            </a>
                        </li> */}
                        <li>
                            <a
                                href="https://koyimages.com/"
                                className="hover:underline"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Brought to you by{" "}
                    <a
                        href="https://koyimages.com/"
                        className="hover:underline font-semibold"
                    >
                        KoyImages
                    </a>
                    . All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
