import { useState } from "react";
import TopicRow from "../components/topic/TopicRow";

export default function Browse(){
    const [topics, setTopics] = useState<string[]>(["Topic 1", "Topic 2", "Topic 3"]);

    
    return(
        <div className="flex flex-col items-center h-full w-full p-2">
            <p>Browse</p>

            <div className="flex flex-col items-center w-full">
                <TopicRow topics={topics}></TopicRow>
                <TopicRow topics={topics}></TopicRow>
                <TopicRow topics={topics}></TopicRow>
                <TopicRow topics={topics}></TopicRow>
            </div>
        </div>
    );
}