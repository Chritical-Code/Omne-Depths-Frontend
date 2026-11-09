import styles from "./TopicAnimator.module.css";
import type {Topic} from "@/types/types";
import TopicBubble from "./TopicBubble";

type TopicAnimatorProps = {
    topic: Topic,
    bobDelay: number,
    namey: string,
}

export default function TopicAnimator({topic, bobDelay, namey}: TopicAnimatorProps){
    return(
        <div id={namey} className={styles.topicAnimator} style={{"animationDelay": `${bobDelay}s`}}>
            <TopicBubble topic={topic}></TopicBubble>
        </div>
    );
}