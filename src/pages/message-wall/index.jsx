import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { messages } from "@/constants";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
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
            {/* Heading */}
            <motion.h2
                variants={fadeInUp}
                className="text-3xl text-[#002855] text-center font-bold tracking-wide"
            >
                Messages to God
            </motion.h2>

            <motion.p
                variants={fadeInUp}
                className="text-gray-700 text-center mt-3 text-lg"
            >
                A collection of prayers, gratitude, and heartfelt thoughts
                shared in faith.
            </motion.p>

            {/* Messages List */}
            <motion.div className="flex flex-col border rounded-t-xl bg-white bg-white/30 backdrop-blur-md bg-gradient-to-r from-[#cce7ff] to-[#99cfff] mt-10">
                {messages.map((message) => (
                    <motion.div
                        key={message.id}
                        variants={fadeInUp}
                        className="rounded-none border-b p-5 bg-none"
                    >
                        <Card className="rounded-none border-none shadow-none bg-transparent">
                            <CardHeader className="p-0 mb-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg font-semibold text-[#002855]">
                                        {message.name}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-gray-600">
                                        {message.date}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-gray-800 leading-relaxed text-[15px]">
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
