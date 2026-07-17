import { Link } from "react-router-dom";
import styles from "./TopicBubble.module.css";

type TopicBubbleProps = {
    topic: string,
    bobDelay: number,
}

export default function TopicBubble({topic, bobDelay}: TopicBubbleProps){
    return(
        <div className={styles.topicBubble} style={{"animationDelay": `${bobDelay}s`}}>
            <Link to={"/topic/" + topic}
            className="flex w-full h-full shrink-0 items-center justify-center">
                <p className="">{topic}</p>
            </Link>
        </div>
    );
}