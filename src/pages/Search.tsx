import type { Topic, TopicData } from "@/types/types";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';

export default function Search(){
    const [topics, setTopics] = useState<Topic[]>([{name: "topic", id: -1}]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    
    useEffect(() => {
        loadTopics(setTopics);
    }, []);

    return(
        <div className="flex flex-col items-center">
            <p className="font-bold">Search Page</p>
            <p>Searched: {searchQuery}</p>
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
}