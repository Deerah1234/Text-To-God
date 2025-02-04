import { useState } from "react";
import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideSend } from "lucide-react";

const ADMIN_NAME = "Divine Voice";

const SendAMessage = ({ isAdmin = false }) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if a regular user tries to use the admin name
        if (
            !isAdmin &&
            name.trim().toLowerCase() === ADMIN_NAME.toLowerCase()
        ) {
            setError(`The name "${ADMIN_NAME}" is reserved for admin.`);
            return;
        }

        setError("");
        alert("Message submitted successfully!");
    };

    return (
        <div className="max-w-2xl mx-auto px-3">
            {/* Page Heading */}
            <Heading
                heading="Write Your Message to God"
                subheading="Share your thoughts, prayers, or gratitude. Let your heart speak freely."
            />

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-6">
                {/* Name Input */}
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-lg font-medium text-[#003366]"
                    >
                        Name:
                    </label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="E.g. John Doe"
                        required
                        aria-label="Enter your name"
                        className="block w-full p-3 text-sm shadow-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003366] focus:border-[#003366]"
                    />
                    {error && (
                        <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                </div>

                {/* Message Textarea */}
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-lg font-medium text-[#003366]"
                    >
                        Your Message:
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Leave a prayer or gratitude message..."
                        required
                        className="block w-full p-3 text-sm shadow-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#003366] focus:border-[#003366] resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <Button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-3 text-white bg-[#003366] rounded-lg hover:text-[#003366] hover:bg-white border hover:border-[#003366] shadow-md transition-all duration-300 active:scale-95"
                    >
                        Submit
                        <LucideSend size={18} />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SendAMessage;
