import { useState } from "react";
import TopicRow from "../components/topic/TopicRow";
import styles from "../components/topic/TopicRow.module.css";

export default function Browse(){
    // read topcis from database (eventually)
    const [topics, setTopics] = useState<string[]>(["Topic 1", "Topic 2", "Topic 3"]);
    
    return(
        <div className="flex flex-col items-center h-full w-full p-2">
            <div className="flex flex-col items-center w-full mt-4">
                <TopicRow topics={topics} direction={styles.topicRowRight}></TopicRow>
                <TopicRow topics={topics} direction={styles.topicRowLeft}></TopicRow>
                <TopicRow topics={topics} direction={styles.topicRowRight}></TopicRow>
                <TopicRow topics={topics} direction={styles.topicRowLeft}></TopicRow>
            </div>
        </div>
    );
}