import { useState, useEffect } from "react";
import TopicRow from "../components/topic/TopicRow";
import topicRowStyles from "../components/topic/TopicRow.module.css";
import browseRowStyles from "./Browse.module.css";

export default function Browse(){
    const [topics, setTopics] = useState<string[]>([]);

    useEffect(() => {
        loadTopics(setTopics);
    }, []);
    
    return(
        <div className={browseRowStyles.oceanBackground}>
            <div className="flex flex-col items-center w-full overflow-y-scroll overflow-x-hidden">
                <TopicRow topics={topics} direction={topicRowStyles.topicRowRight}></TopicRow>
                <TopicRow topics={topics} direction={topicRowStyles.topicRowLeft}></TopicRow>
                <TopicRow topics={topics} direction={topicRowStyles.topicRowRight}></TopicRow>
                <TopicRow topics={topics} direction={topicRowStyles.topicRowLeft}></TopicRow>
                <TopicRow topics={topics} direction={topicRowStyles.topicRowRight}></TopicRow>
                <TopicRow topics={topics} direction={topicRowStyles.topicRowLeft}></TopicRow>
                <TopicRow topics={topics} direction={topicRowStyles.topicRowRight}></TopicRow>
                <TopicRow topics={topics} direction={topicRowStyles.topicRowLeft}></TopicRow>
                <div className="w-1 h-22 shrink-0"></div>
            </div>
        </div>
    );
}

//fetch topics from backend
async function loadTopics(setTopics: Function){
    const response = await fetch("http://localhost:8000/topics/");
    const topicData: TopicData = await response.json();

    let topicStrings: string[] = []
    topicData.results.forEach((topicDatum) => {
        topicStrings.push(topicDatum.topic);
    })
    
    setTopics(topicStrings);
}

type Topic = {
    topic: string;
};

type TopicData = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Topic[];
};