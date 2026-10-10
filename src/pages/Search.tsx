import TopicBubble from "@/components/topic/TopicBubble";
import type { Topic, TopicData } from "@/types/types";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import browseStyles from "./Browse.module.css";

export default function Search(){
    const [topics, setTopics] = useState<Topic[]>([{name: "topic", id: -1}]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    
    useEffect(() => {
        loadTopics(setTopics, searchQuery);
    }, [searchQuery]);

    const mappedTopics = topics.map((topic) => {
        return(
            <>
                <div className="h-2 w-2 shrink-0"></div>
                <TopicBubble topic={topic}></TopicBubble>
            </>
        );
    });

    return(
        <div className={browseStyles.oceanBackground}>
            <p className="font-bold text-blue-200">Topic Search Results:</p>
            {mappedTopics}
        </div>
    );
}

//fetch topics from backend
async function loadTopics(setTopics: Function, searchQuery: String,){
    const response = await fetch("http://localhost:8000/topicsearch/?search=" + searchQuery);
    const topicData: TopicData = await response.json();

    let topics: Topic[] = []
    topicData.results.forEach((topicDatum) => {
        topics.push(topicDatum);
    })

    setTopics(topics);
}