import TopicBox from "@/components/topic/TopicBox";
import type { Topic, TopicData } from "@/types/types";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';

export default function Search(){
    const [topics, setTopics] = useState<Topic[]>([{name: "topic", id: -1}]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    
    useEffect(() => {
        loadTopics(setTopics, searchQuery);
    }, [searchQuery]);

    const mappedTopics = topics.map((topic) => {
        return(
            <TopicBox topic={topic}></TopicBox>
        );
    });

    return(
        <div className="flex flex-col items-center">
            <p className="font-bold">Topic Search Results:</p>
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