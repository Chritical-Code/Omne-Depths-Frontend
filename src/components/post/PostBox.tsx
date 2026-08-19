import type { Post } from "@/types/types";
import { Link } from "react-router-dom";

type PostBoxProps = {
    post: Post,
}

export default function PostBox({post}: PostBoxProps){
    return(
        <div className="flex flex-col items-center w-80 h-20 mt-2 border bg-blue-200">
            <Link to={"/post/" + post.id} className="flex flex-col w-full h-full shrink-0 items-center justify-center">
                <p className="font-bold">{post.title}</p>
                <p>{post.text}</p>
            </Link>
            
        </div>
    );
}