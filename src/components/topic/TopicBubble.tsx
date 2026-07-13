import styles from "./TopicBubble.module.css";

type TopicBubbleProps = {
    topic: string,
    delay: number,
}

export default function TopicBubble({topic, delay}: TopicBubbleProps){
    return(
        <div className={styles.topicBubble} style={{"animationDelay": `${delay}s`}}>
            <p className="">{topic}</p>
        </div>
    );
}