import styles from "./TopicAnimator.module.css";
import type {Topic} from "@/types/types";
import TopicBubble from "./TopicBubble";

type TopicAnimatorProps = {
    topic: Topic,
    bobDelay: number,
}

export default function TopicAnimator({topic, bobDelay}: TopicAnimatorProps){
    return(
        <div className={styles.topicAnimator} style={{"animationDelay": `${bobDelay}s`}}>
            <TopicBubble topic={topic}></TopicBubble>
        </div>
    );
}