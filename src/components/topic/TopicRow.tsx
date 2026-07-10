import TopicBubble from "./TopicBubble";
import styles from "./TopicRow.module.css";

type TopicRowProps = {
    topics: string[],
}

export default function TopicRow({topics}: TopicRowProps){
    const doubleTopics = [...topics, ...topics];
    
    const topicBoxes = doubleTopics.map((topic, index) => {
        return(
            <TopicBubble key={index} topic={topic}></TopicBubble>
        );
    });
    
    return(
        <div className={styles.topicRow}>
            {topicBoxes}
        </div>
    );
}
