import styles from "./TopicBubble.module.css";

type TopicBubbleProps = {
    topic: string,
}

export default function TopicBubble({topic}: TopicBubbleProps){
    return(
        <div className={styles.topicBubble}>
            <p className="">{topic}</p>
        </div>
    );
}