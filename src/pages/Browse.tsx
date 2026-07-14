import { useState } from "react";
import TopicRow from "../components/topic/TopicRow";
import topicRowStyles from "../components/topic/TopicRow.module.css";
import browseRowStyles from "./Browse.module.css";

export default function Browse(){
    // read topcis from database (eventually)
    const [topics, setTopics] = useState<string[]>(["Topic 1", "Topic 2", "Topic 3"]);
    
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