import { Link } from "react-router-dom";
import styles from "./TopicBubble.module.css";
import type {Topic} from "@/types/types";

type TopicBubbleProps = {
    topic: Topic,
}

export default function TopicBubble({topic}: TopicBubbleProps){
    return(
        <div className={styles.topicBubble}>
            <Link to={"/topic/" + topic.name} className="flex w-9/10 h-9/10 shrink-0 items-center overflow-hidden">
            <div className="flex items-center">
                <p className={styles.topicText}>{topic.name}</p>
            </div>
            </Link>
        </div>
    );
}