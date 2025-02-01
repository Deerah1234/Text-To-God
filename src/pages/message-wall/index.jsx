import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { messages } from "@/constants";
// import { Heading } from "@/components";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MessageWall = () => {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
            className="text-base max-w-3xl mx-auto p-4"
        >
            <motion.h2
                variants={fadeInUp}
                className="text-2xl text-[#003366] mb-6 text-center font-nohemi font-semibold"
            >
                Messages to God
            </motion.h2>
            <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-center mb-8"
            >
                A collection of prayers, gratitude, and heartfelt thoughts
                shared by others in faith.
            </motion.p>
            {/* <Heading
                heading="Messages to God"
                subheading="A collection of prayers, gratitude, and heartfelt thoughts
                shared by others in faith."
            /> */}

            <motion.div className="flex flex-col gap-5">
                {messages.map((message) => (
                    <motion.div
                        key={message.id}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Card className="p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200 rounded-lg bg-white">
                            <CardHeader className="p-0 mb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg font-semibold text-[#003366]">
                                        {message.name}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-gray-500">
                                        {message.date}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-gray-700 leading-relaxed">
                                    {message.content}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default MessageWall;
