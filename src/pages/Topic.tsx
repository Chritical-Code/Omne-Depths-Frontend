import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Post, PostData } from "@/types/types";
import PostBox from "@/components/post/PostBox";

export default function Topic(){
    const [posts, setPosts] = useState<Post[]>([]);
    const {topic} = useParams();

    useEffect(() => {
            loadPosts(setPosts, topic ?? "-1");
    }, []);

    //create post boxes
    const postBoxes = posts.map((post) => {
        return(
            <PostBox post={post} key={post.id}></PostBox>
        );
    });

    return(
        <div className="flex flex-col items-center h-full w-full">
            <p className="ml-2">Topic: {topic}</p>
            {postBoxes}
        </div>
    );
}

//fetch posts from backend
async function loadPosts(setPosts: Function, topic: string){
    const response = await fetch("http://localhost:8000/test/" + topic + "/");
    const postData: PostData = await response.json();

    let posts: Post[] = []
    postData.results.forEach((postDatum) => {
        posts.push(postDatum);
    })
    
    setPosts(posts);
}