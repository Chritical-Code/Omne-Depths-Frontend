import styles from "./TopicBubble.module.css";

type TopicBubbleProps = {
    topic: string,
}

export default function TopicBubble({topic}: TopicBubbleProps){
    const delay = Math.random() * 5;
    
    return(
        <div className={styles.topicBubble} style={{"animationDelay": `${delay}s`}}>
            <p className="">{topic}</p>
        </div>
    );
}