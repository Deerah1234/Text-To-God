import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundVideo from "../assets/videos/heroVid.mp4";
import { ArrowRight } from "lucide-react";

const WelcomeScreen = ({ onFinish }) => {
    const [count, setCount] = useState(4);
    const [showWelcome, setShowWelcome] = useState(
        localStorage.getItem("visited") ? false : true
    );

    useEffect(() => {
        if (!showWelcome) {
            onFinish(); // Skip the welcome screen if already visited
            return;
        }

        localStorage.setItem("visited", "true"); // Mark as visited

        const interval = setInterval(() => {
            setCount((prev) => (prev > 1 ? prev - 1 : 1));
        }, 1000);

        const timer = setTimeout(() => {
            clearInterval(interval);
            onFinish();
        }, 25000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [showWelcome]);

    if (!showWelcome) return null; // Skip rendering if already visited

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white text-center z-50"
            >
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={BackgroundVideo}
                    autoPlay
                    muted
                    loop
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Animated Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 px-6"
                >
                    <h1 className="text-4xl md:text-6xl font-nohemi">
                        Share Your{" "}
                        <span className="font-semibold text-[#003366] md:text-8xl text-5xl">
                            thoughts
                        </span>
                        ,<br />
                        <span className="font-semibold text-[#003366] md:text-8xl text-5xl">
                            Prayers
                        </span>
                        , or{" "}
                        <span className="font-semibold text-[#003366] md:text-8xl text-5xl">
                            Gratitude
                        </span>
                        <br /> to{" "}
                        <span className="font-semibold text-[#003366] md:text-8xl text-5xl">
                            God
                        </span>
                        .
                    </h1>

                    <p className="mt-2 text-base">Let your Heart Speak!</p>
                    <p className="text-sm text-[#F4F4F4]">
                        “Give all your worries and cares to God, for he cares
                        about you.”
                        <span className="text-white"> — 1 Peter 5:7 (NIV)</span>
                    </p>

                    {/* Redirecting Text with Countdown & Arrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="mt-6 flex items-center justify-center gap-2 text-xl"
                    >
                        <p className="text-[#F4F4F4]">
                            Redirecting in {count}s
                        </p>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            <ArrowRight className="text-2xl text-[#F4F4F4]" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default WelcomeScreen;
