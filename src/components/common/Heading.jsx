import { motion } from "framer-motion";

const Heading = ({ heading, subheading }) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="flex flex-col items-center justify-center"
        >
            {/* <h2 className="text-5xl font-extrabold font-nohemi"></h2>
            <p className="text-base"></p> */}

            <motion.h2
                variants={fadeInUp}
                className="text-2xl text-[#003366] mb-6 text-center font-nohemi font-semibold"
            >
                {heading}
            </motion.h2>
            <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-center mb-8"
            >
                {subheading}
            </motion.p>
        </motion.div>
    );
};

// Heading.prototype = {
//    heading: PropTypes.string,

// }

export default Heading;
