import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Post, PostData } from "@/types/types";
import PostBox from "@/components/post/PostBox";

export default function Topic(){
    const [posts, setPosts] = useState<Post[]>([{id: -1, topic: -1, title: "Title", text:"text"}]);
    const {topic} = useParams();

    useEffect(() => {
            loadPosts(setPosts);
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
async function loadPosts(setPosts: Function){
    const response = await fetch("http://localhost:8000/posts/");
    const postData: PostData = await response.json();

    let posts: Post[] = []
    postData.results.forEach((postDatum) => {
        posts.push(postDatum);
    })
    
    setPosts(posts);
}