import { Heading } from "@/components";

const About = () => {
    return (
        <div>
            <Heading
                heading="About This Website"
                subheading="A simple platform for anyone to connect with God, share their thoughts, and inspire others with faith."
            />

            <p className="mt-4 mb-7 text-gray-700 leading-relaxed">
                Welcome to <span className="font-bold"> TextToGod </span>, a
                digital space where anyone can reach out to God and share their
                thoughts, prayers, gratitude, or reflections. In a world full of
                distractions, we aim to create a peaceful environment where you
                can express your heart freely and connect with a higher purpose.
                This website was designed to provide a simple, calming platform
                for people to write their messages to God, share their spiritual
                journeys, and read others’ heartfelt prayers. Whether you’re
                seeking guidance, offering thanks, or simply sharing a moment of
                connection, <span className="font-bold"> TextToGod </span> is a
                space for your soul to be heard.
            </p>
            <h2 className="text-3xl font-semibold my-2 font-nohemi text-gray-700">
                Mission Statement:
            </h2>
            <p className="text-gray-700 leading-relaxed">
                Our mission is to encourage and facilitate honest and open
                communication with God. Through the messages shared on this
                platform, we hope to inspire a community of individuals who are
                grounded in faith, peace, and love. Our goal is to make it easy
                for people to connect with their spirituality in an accessible,
                meaningful way.
            </p>
        </div>
    );
};
export default About;
