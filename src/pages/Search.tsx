import type { Topic, TopicData } from "@/types/types";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';

export default function Search(){
    const [topics, setTopics] = useState<Topic[]>([{name: "topic", id: -1}]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    
    useEffect(() => {
        loadTopics(setTopics, searchQuery);
    }, []);

    const mappedTopics = topics.map((topic) => {
        return(
            <div key={topic.id} className="flex items-center w-40 h-10 border mb-1 bg-amber-200">
                <Link to={"/topic/" + topic.name}
                className="flex w-full h-full shrink-0 items-center justify-center">
                    <p className="">{topic.name}</p>
                </Link>
            </div>
        );
    });

    return(
        <div className="flex flex-col items-center">
            <p className="font-bold">Search Page</p>
            <p>Searched: {searchQuery}</p>
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