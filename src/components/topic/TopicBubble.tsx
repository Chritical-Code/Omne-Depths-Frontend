import styles from "./TopicBubble.module.css";

type TopicBubbleProps = {
    topic: string,
    bobDelay: number,
}

export default function TopicBubble({topic, bobDelay}: TopicBubbleProps){
    return(
        <div className={styles.topicBubble} style={{"animationDelay": `${bobDelay}s`}}>
            <p className="">{topic}</p>
        </div>
    );
}