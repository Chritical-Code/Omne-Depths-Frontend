import { Link } from "react-router-dom";
import styles from "./TopicBubble.module.css";
import type {Topic} from "@/types/types";

type TopicBubbleProps = {
    topic: Topic,
}

export default function TopicBubble({topic}: TopicBubbleProps){
    return(
        <div className={styles.topicBubble}>
            <Link to={"/topic/" + topic.name}
            className="flex w-full h-full shrink-0 items-center justify-center">
                <p className="">{topic.name}</p>
            </Link>
        </div>
    );
}