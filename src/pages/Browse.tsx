import { useState, useEffect } from "react";
import TopicRow from "../components/topic/TopicRow";
import topicRowStyles from "../components/topic/TopicRow.module.css";
import browseRowStyles from "./Browse.module.css";
import type {Topic, TopicData} from "@/types/types";

export default function Browse(){
    const [topics, setTopics] = useState<Topic[]>([{name: "topic", id: -1}]);

    useEffect(() => {
        loadTopics(setTopics);
    }, []);

    //group topics into rows of 3
    let groupedTopics: Topic[][] = []
    let topicIndex = 0;
    while(topicIndex < topics.length){
        let tempRow: Topic[] = []
        let rowItemCounter = 0;
        while(rowItemCounter < 3){
            if(topicIndex >= topics.length){
                break;
            }
            tempRow.push(topics[topicIndex])
            rowItemCounter++;
            topicIndex++;
        }
        groupedTopics.push(tempRow);
    }

    const topicRows = groupedTopics.map((topicRow, index) => {
        return(
            <TopicRow topics={topicRow} key={index} direction={topicRowStyles.topicRowRight}></TopicRow>
        );
    });
    
    return(
        <div className={browseRowStyles.oceanBackground}>
            <div className="flex flex-col items-center w-full overflow-y-scroll overflow-x-hidden">
                {topicRows}
                <div className="w-1 h-22 shrink-0"></div>
            </div>
        </div>
    );
}

//fetch topics from backend
async function loadTopics(setTopics: Function){
    const response = await fetch("http://localhost:8000/topics/");
    const topicData: TopicData = await response.json();

    let topics: Topic[] = []
    topicData.results.forEach((topicDatum) => {
        topics.push(topicDatum);
    })
    
    setTopics(topics);
    console.log("topicData.results", topicData.results);
}