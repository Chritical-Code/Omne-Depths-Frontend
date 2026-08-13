import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Topic(){
    const [posts, setPosts] = useState();
    const {topic} = useParams();

    //fetch post data

    //create post boxes

    return(
        <div className="flex h-full w-full">
            <p className="ml-2">Topic: {topic}</p>
        </div>
    );
}

type Post = {
    id: number,
    topic: number,
    title: string,
    text: string,
}

type TopicData = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Post[];
};