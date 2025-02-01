import { useState, useEffect } from "react";
import { BackgroundVideo } from ".";

const BgVideo = ({ onVideoEnd }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Set a timer for how long the splash screen should show
        const timer = setTimeout(() => {
            setIsVisible(false);
            onVideoEnd(); // Notify the parent component
        }, 7000); // Adjust time (3s) as needed

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null; // Hide the splash screen after the time ends

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={BackgroundVideo}
                autoPlay
                muted
                onEnded={() => setIsVisible(false)}
            ></video>
        </div>
    );
};

export default BgVideo;
