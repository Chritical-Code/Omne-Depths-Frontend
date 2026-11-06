import TopicBubble from "@/components/topic/TopicBubble";
import type { Topic, TopicData } from "@/types/types";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import browseStyles from "./Browse.module.css";
import { BackendUrls } from "@/misc/BackendUrls";
import Gap from "@/components/Gap";

export default function Search(){
    const [topics, setTopics] = useState<Topic[]>([{name: "topic", id: -1}]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    
    useEffect(() => {
        loadTopics(setTopics, searchQuery).catch((error: unknown) => {
            console.error("Failed to load topics:", error);
        });
    }, [searchQuery]);

    const mappedTopics = topics.map((topic) => {
        return(
            <div key={topic.id}>
                <div className="h-2 w-2 shrink-0"></div>
                <TopicBubble topic={topic}></TopicBubble>
            </div>
        );
    });

    return(
        <div className={browseStyles.oceanBackground}>
            <div className="flex flex-col items-center w-full overflow-y-scroll overflow-x-hidden">
                <p className="font-bold text-od-1-light">Topic Search Results:</p>
                {mappedTopics}

                <Gap></Gap>
            </div>
        </div>
    );
}

//fetch topics from backend
async function loadTopics(setTopics: Function, searchQuery: string,){
    const response = await fetch(BackendUrls.search + searchQuery);
    const topicData: TopicData = await response.json();

    let topics: Topic[] = []
    topicData.results.forEach((topicDatum) => {
        topics.push(topicDatum);
    })

    setTopics(topics);
}