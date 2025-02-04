import { Heading } from "@/components";

const About = () => {
    return (
        <div>
            <Heading
                heading="About This Website"
                subheading="A simple platform for anyone to connect with God, share their thoughts, and inspire others with faith."
            />

            {/* MISSION */}
            <h2 className="text-xl font-semibold my-2 font-nohemi text-gray-700">
                Our Mission:
            </h2>
            <p className="mt-4 mb-7 text-gray-700 leading-relaxed">
                At <span className="font-bold">GRATITUDE</span>, our mission is
                to spread the Gospel of our Lord Jesus Christ by showing{" "}
                <span className="font-bold">GRATITUDE</span> to God for how far
                He has brought us. Any individual is free to write a message of
                thanks to the Lord Jesus Christ.
                <br />
                We are passionate about technology and are driven by the love of
                God.
            </p>

            {/* MEET OUR FOUNDERS */}
            <h2 className="text-xl font-semibold my-2 font-nohemi text-gray-700">
                Meet Our Founders:
            </h2>
            <p className="mt-4 mb-7 text-gray-700 leading-relaxed">
                <span className="font-bold">Kofi Bhavnani</span>, who is also
                the{" "}
                <span className="font-bold">
                    <a
                        href="https://www.kofyimage.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        CEO of KofyImages
                    </a>
                </span>{" "}
                as well as <span className="font-bold">DeepThinkers</span>. He’s
                also the founder of{" "}
                <span className="font-bold">B’NANI Support System</span>, which
                helps the less privileged in society.
                <br />
                <br />
                <span className="font-bold">Emmanuel James</span>, founder of{" "}
                <span className="font-bold">
                    <a
                        href="https://www.linkedin.com/in/techderry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Tech Derry
                    </a>
                </span>{" "}
                and a coach on mindset. He is passionate about technology,
                creativity, and personal growth, using his expertise to empower
                others.
                <br />
                <br />
                Both co-founders have a background in software engineering and a
                heart for innovation. Together, we have combined our strengths,
                skills, and shared vision to create something truly special. We
                are grateful for the trust of our valued users.
            </p>

            {/* OUR VALUES */}
            <h2 className="text-xl font-semibold my-2 font-nohemi text-gray-700">
                Our Values:
            </h2>
            <p className="mt-4 mb-7 text-gray-700 leading-relaxed">
                <span className="font-bold">Faith and Gratitude:</span> We
                recognize and thank God for His guidance and blessings.
                <br />
                <span className="font-bold">Innovation:</span> We strive to be
                at the forefront of technology and creativity.
                <br />
                <span className="font-bold">Community:</span> We value the
                connections we build and the impact we make.
                <br />
                <span className="font-bold">Integrity:</span> We are committed
                to doing what is right, always.
                <br />
                <br />
                Thank you for being a part of our journey. We are excited to
                have you with us and look forward to achieving great things
                together.
            </p>
        </div>
    );
};

export default About;
