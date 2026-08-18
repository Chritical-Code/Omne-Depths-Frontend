import TopicBubble from "./TopicBubble";
import styles from "./TopicRow.module.css";
import type {Topic} from "@/types/types";

type TopicRowProps = {
    topics: Topic[],
    direction?: string,
}

export default function TopicRow({topics, direction: slide}: TopicRowProps){
    // raise topics count to correct number
    let raisedTopics = [...topics];
    while(raisedTopics.length < 3){
        raisedTopics.push(raisedTopics[0]);
    }
    
    // double the array to help simulate round robin
    const doubleTopics = [...raisedTopics, ...raisedTopics];
    
    // generate delays so animations are offset
    let bobDelay: number[] = []
    for(let x = 0; x < doubleTopics.length / 2; x++){
        bobDelay.push(Math.random() * -4);
    }
    bobDelay = [...bobDelay, ...bobDelay];

    const slideDelay: number = Math.random() * -20;
    const slideDuration: number = 20 - (Math.random() * 10)
    
    const topicBoxes = doubleTopics.map((topic, index) => {
        return(
            <TopicBubble key={index} topic={topic} bobDelay={bobDelay[index]}></TopicBubble>
        );
    });
    
    return(
        <div className={`${styles.topicRow} ${slide}`} 
        style={{"animationDelay": `${slideDelay}s`, "animationDuration": `${slideDuration}s`}}>
            {topicBoxes}
        </div>
    );
}