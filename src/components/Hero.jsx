import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <div className="">
            <div className="">
                <h1 className="text-6xl text-[#F4F4F4] font-nohemi">
                    Share Your{" "}
                    <span className="font-semibold text-[#003366] text-8xl">
                        thoughts
                    </span>
                    ,
                    <br />
                    <span className="font-semibold text-[#003366] text-8xl">
                        Prayers
                    </span>
                    , or{" "}
                    <span className="font-semibold text-[#003366] text-8xl">
                        {" "}
                        Gratitude
                    </span>
                    <br /> to{" "}
                    <span className="font-semibold text-[#003366] text-8xl">
                        God
                    </span>
                    .
                </h1>
                <div className="mt-1">
                    <p className="text-white">Let your Heart Speak!</p>
                    <p className="text-sm text-[#F4F4F4]">
                        “Give all your worries and cares to God, for he cares
                        about you.”
                        <span className="text-white">— 1 Peter 5:7 (NIV)</span>
                    </p>
                </div>
            </div>

            <Button className="flex items-center justify-center bg-[#003366] hover:text-[#003366] hover:bg-white mt-16">
                <Link to="/send-a-message">Write a Message</Link>
            </Button>
        </div>
    );
};
export default Hero;
