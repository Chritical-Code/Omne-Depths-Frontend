import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Post, PostData } from "@/types/types";
import PostBox from "@/components/post/PostBox";
import { BackendUrls } from "@/misc/BackendUrls";

export default function Topic(){
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const {topic} = useParams();

    useEffect(() => {
            loadPosts(setPosts, topic ?? "-1");
    }, []);

    async function handleClick(){
        setLoading(true);
        await generatePosts(topic ?? "", setPosts, posts);
        setLoading(false);
    }

    // create post boxes
    const postBoxes = posts.map((post) => {
        return(
            <PostBox post={post} key={post.id}></PostBox>
        );
    });

    return(
        <div className="flex flex-col items-center h-full w-full overflow-y-scroll">
            <p className="ml-2 font-bold">{topic}</p>
            
            {postBoxes}

            <button className={`btn mt-2 w-25 h-15 ${loading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={loading} onClick={() => handleClick()}>
                {loading ? "Generating..." : "Generate Posts"}
            </button>

            <div className="flex w-1 h-10 shrink-0"></div>
        </div>
    );
}

// fetch posts from backend
async function loadPosts(setPosts: Function, topic: string){
    const response = await fetch(BackendUrls.postsByTopic + topic + "/");
    const postData: PostData = await response.json();

    let posts: Post[] = []
    postData.results.forEach((postDatum) => {
        posts.push(postDatum);
    })
    
    setPosts(posts);
}

// generate posts at backend
async function generatePosts(topic: string, setPosts: Function, oldPosts: Post[]){
    const response = await fetch(BackendUrls.generatePosts + topic + "/");
    const postData: PostData = await response.json();

    let newPosts: Post[] = []
    postData.results.forEach((postDatum) => {
        newPosts.push(postDatum);
    })
    
    setPosts([...oldPosts, ...newPosts]);
}