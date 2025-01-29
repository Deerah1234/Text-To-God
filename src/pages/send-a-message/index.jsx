import { Heading } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SendAMessage = () => {
    return (
        <div>
            <Heading
                heading="Write Your Message to God"
                subheading="Share any thoughts you have, prayers, or gratitude. et your heart speak freely."
            />

            <form
                action="#"
                method="POST"
                className="mx-auto mt-16 max-w-xl sm:mt-20 flex flex-col gap-5"
            >
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                    >
                        Name:{" "}
                    </label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="E.g John Doe"
                        required
                        className="block shadow-md p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                    >
                        Email:{" "}
                    </label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E.g. johndoe@mail.com"
                        required
                        className="block shadow-md p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 font-medium text-gray-900 dark:text-white"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block shadow-md p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Leave a Prayer, Gatitude—Let your mind speaks..."
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <Button className="flex items-center justify-center bg-[#003366] hover:text-[#003366] hover:bg-white hover:border p-5 hover:shadow-sm">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default SendAMessage;
