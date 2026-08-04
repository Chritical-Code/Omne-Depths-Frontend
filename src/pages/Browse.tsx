import { useState, useEffect } from "react";
import TopicRow from "../components/topic/TopicRow";
import topicRowStyles from "../components/topic/TopicRow.module.css";
import browseRowStyles from "./Browse.module.css";

type TopicT = {
  topic: string;
};

type TopicResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TopicT[];
};

export default function Browse(){
    // read topcis from database (eventually)
    const [topics, setTopics] = useState<string[]>(["Topic 1", "Topic 2", "Topic 3"]);

    useEffect(() => {
        async function loadTopics() {
            const res = await fetch("http://localhost:8000/topics/");
            const data: TopicResponse = await res.json();

            let makeTopics: string[] = []
            data.results.forEach((dat) => {
                makeTopics.push(dat.topic);
            })

            setTopics(makeTopics);
        }

        loadTopics();
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