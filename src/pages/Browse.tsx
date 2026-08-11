import { useState, useEffect } from "react";
import TopicRow from "../components/topic/TopicRow";
import topicRowStyles from "../components/topic/TopicRow.module.css";
import browseRowStyles from "./Browse.module.css";

export default function Browse(){
    const [topics, setTopics] = useState<Topic[]>([{name: "testemoptytopic", id: -1}]);

    useEffect(() => {
        loadTopics(setTopics);
    }, []);

    //break topics into rows of 3
    let sortedTopics: Topic[][] = []
    let y = 0;
    while(y < topics.length){
        let x = 0;
        let tempRow: Topic[] = []

        while(x < 3){
            if(y >= topics.length){
                break;
            }
            tempRow.push(topics[y])
            x++;
            y++;
        }

        sortedTopics.push(tempRow);
    }

    const topicRows = sortedTopics.map((topicRow, index) => {
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

type Topic = {
    name: string;
    id: number;
};

type TopicData = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Topic[];
};