import { Heading } from "@/components";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { messages } from "@/constants";

const MessageWall = () => {
    return (
        <div>
            <Heading
                heading="Messages to God"
                subheading="A collection of Prayers, gratitude, and heartfelt thoughts shared by others in faith."
            />

            {messages.map((message) => (
                <Card key={message.id} className="p-5 my-5">
                    <CardHeader>
                        <CardTitle>{message.name}</CardTitle>
                        <CardDescription>{message.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{message.content}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default MessageWall;
