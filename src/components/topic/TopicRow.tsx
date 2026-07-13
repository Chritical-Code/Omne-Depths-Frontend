import TopicBubble from "./TopicBubble";
import styles from "./TopicRow.module.css";

type TopicRowProps = {
    topics: string[],
    direction?: string,
}

export default function TopicRow({topics, direction: slide}: TopicRowProps){
    // double the array to help simulate round robin
    const doubleTopics = [...topics, ...topics];
    
    // generate delays so animations are offset
    let delay: number[] = []
    for(let x = 0; x < doubleTopics.length / 2; x++){
        delay.push(Math.random() * -4);
    }
    delay = [...delay, ...delay]
    
    const topicBoxes = doubleTopics.map((topic, index) => {
        return(
            <TopicBubble key={index} topic={topic} delay={delay[index]}></TopicBubble>
        );
    });
    
    return(
        <div className={`${styles.topicRow} ${slide}`}>
            {topicBoxes}
        </div>
    );
}