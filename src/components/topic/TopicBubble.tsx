import { Link } from "react-router-dom";
import styles from "./TopicBubble.module.css";
import type {Topic} from "@/types/types";

type TopicBubbleProps = {
    topic: Topic,
    bobDelay: number,
}

export default function TopicBubble({topic, bobDelay}: TopicBubbleProps){
    return(
        <div className={styles.topicBubble} style={{"animationDelay": `${bobDelay}s`}}>
            <Link to={"/topic/" + topic.id}
            className="flex w-full h-full shrink-0 items-center justify-center">
                <p className="">{topic.name}</p>
            </Link>
        </div>
    );
}