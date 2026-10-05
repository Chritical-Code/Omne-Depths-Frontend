import type { Topic, TopicData } from "@/types/types";

export default function Profile(){
    function handleClick(){
        return;
        generateTopics();
    }
    
    return(
        <div className="flex flex-col items-center h-full w-full">
            <p className="">Profile</p>
            <button disabled className="btn w-25 h-15" onClick={() => handleClick()}>Generate Topics</button>
        </div>
    );
}

//generate topics at backend
async function generateTopics(){
    const response = await fetch("http://localhost:8000/generatetopics/");
    const topicData: TopicData = await response.json();

    let topics: Topic[] = []
    topicData.results.forEach((topicDatum) => {
        topics.push(topicDatum);
    })
    
    console.log(topics);
}