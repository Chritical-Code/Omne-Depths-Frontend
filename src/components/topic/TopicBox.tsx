import type { Topic } from "@/types/types";
import { Link } from "react-router-dom";

type TopicBoxProps = {
    topic: Topic,
}

export default function TopicBox({topic}: TopicBoxProps) {
    return(
        <div key={topic.id} className="flex items-center justify-center w-40 h-15 border mb-1 bg-blue-200 overflow-hidden">
            <Link to={"/topic/" + topic.name}
            className="flex w-9/10 h-9/10 shrink-0 items-center justify-center overflow-hidden">
                <p className="text-center">{topic.name}</p>
            </Link>
        </div>
    );
}