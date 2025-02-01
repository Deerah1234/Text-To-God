const Footer = () => {
    return (
        <footer className="w-full py-4 text-center text-sm text-gray-500 md:mb-auto mb-16">
            <p>
                &copy; {new Date().getFullYear()} Brought to you by{" "}
                <a
                    href="https://kofyimage.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:underline"
                >
                    KofyImage
                </a>
            </p>
        </footer>
    );
};

export default Footer;
