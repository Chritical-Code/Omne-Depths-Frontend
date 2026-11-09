import { useState } from "react";
import TopicAnimator from "./TopicAnimator";
import styles from "./TopicRow.module.css";
import type {Topic} from "@/types/types";

type TopicRowProps = {
    topics: Topic[],
    direction?: string,
}

export default function TopicRow({topics, direction: slide}: TopicRowProps){
    const numTopics = 3;
    
    // generate delays so animations are offset
    const [slideDelay] = useState(() => {return (Math.random() * -20)});
    const [slideDuration] = useState( () => { return (20 - (Math.random() * 10))});
    const [bobDelays] = useState(() => {
        const delays = [];
        for(let x = 0; x < numTopics; x++){
            delays.push(Math.random() * -4);
        }
        const doubleDelays = [...delays, ...delays]
        return doubleDelays;
    });

    // raise topics count to correct amount (because too few doesnt work visually)
    let raisedTopics = [...topics];
    let raiseIndex = 0;
    while(raisedTopics.length < numTopics){
        raisedTopics.push({...raisedTopics[raiseIndex]});
        raisedTopics[raiseIndex + 1].id = raisedTopics[raiseIndex + 1].id + "copy"; // helps avoid duplicate keys
        raiseIndex++;
    }
    
    // double the array to help simulate round robin
    const doubleTopics = [...raisedTopics, ...raisedTopics];
    
    const topicBoxes = doubleTopics.map((topic, index) => {
        // make a and b key versions, to  avoid duplicate keys
        let outKey = "";
        if(index < numTopics){
            outKey = topic.id + "a";
        }
        else {
            outKey = topic.id + "b";
        }

        return(
            <TopicAnimator namey={outKey} key={outKey} topic={topic} bobDelay={bobDelays[index]}></TopicAnimator>
        );
    });
    
    return(
        <div className={`${styles.topicRow} ${slide}`} 
        style={{"animationDelay": `${slideDelay}s`, "animationDuration": `${slideDuration}s`}}>
            {topicBoxes}
        </div>
    );
}