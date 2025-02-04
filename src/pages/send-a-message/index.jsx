import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideSend } from "lucide-react";

const SendAMessage = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            {/* Page Heading */}
            <Heading
                heading="Write Your Message to God"
                subheading="Share your thoughts, prayers, or gratitude. Let your heart speak freely."
            />

            {/* Form */}
            <form action="#" method="POST" className="flex flex-col gap-6 mt-6">
                {/* Name Input */}
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-lg font-medium text-[#003366] dark:text-white"
                    >
                        Name:
                    </label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="E.g. John Doe"
                        required
                        aria-label="Enter your name"
                        className="block w-full p-3 text-sm shadow-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-lg font-medium text-[#003366] dark:text-white"
                    >
                        Email:
                    </label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E.g. johndoe@mail.com"
                        required
                        aria-label="Enter your email"
                        className="block w-full p-3 text-sm shadow-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
                    />
                </div>

                {/* Message Textarea */}
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-lg font-medium text-[#003366] dark:text-white"
                    >
                        Your Message:
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Leave a prayer or gratitude message..."
                        required
                        className="block w-full p-3 text-sm shadow-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-[#003366] focus:border-[#003366] resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <Button className="flex items-center gap-2 px-6 py-3 text-white bg-[#003366] rounded-lg hover:text-[#003366] hover:bg-white border hover:border-[#003366] shadow-md transition-all duration-300 active:scale-95">
                        Submit
                        <LucideSend size={18} />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SendAMessage;
