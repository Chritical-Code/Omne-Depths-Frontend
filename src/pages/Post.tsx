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
        <div className="flex flex-col items-center w-full h-full overflow-y-scroll">
            <div className="flex flex-col items-center w-90 md:w-180">
                <p className="font-bold mt-2 text-center">{post?.title}</p>
                <p className="italic mt-4 text-center">{post?.description}</p>
                <p className="whitespace-pre-line mt-4">{post?.text}</p>
                <div className="flex w-10 h-10 shrink-0"></div>
            </div>
        </div>
    );
}

async function loadPost(setPost: Function, postID: string){
    const response = await fetch("http://localhost:8000/posts/" + postID + "/");
    const postDatum: Post = await response.json();
    setPost(postDatum)
}