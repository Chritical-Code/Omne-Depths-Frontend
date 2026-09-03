import type { Post } from "@/types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post(){
    const [post, setPost] = useState<Post>();
    const {postID} = useParams();

    useEffect(() => {
                loadPost(setPost, postID ?? "");
        }, []);

    return(
        <div className="flex flex-col items-center w-full h-full">
            <p className="font-bold">{post?.title}</p>
            <p className="italic">{post?.description}</p>
            <p>{post?.text}</p>
        </div>
    );
}

async function loadPost(setPost: Function, postID: string){
    const response = await fetch("http://localhost:8000/posts/" + postID + "/");
    const postDatum: Post = await response.json();
    setPost(postDatum)
}