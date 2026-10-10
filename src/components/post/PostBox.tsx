import type { Post } from "@/types/types";
import { Link } from "react-router-dom";

type PostBoxProps = {
    post: Post,
}

export default function PostBox({post}: PostBoxProps){
    return(
        <div className="flex flex-col items-center w-120 h-20 mt-2 border bg-blue-200 overflow-clip shrink-0">
            <Link to={"/post/" + post.id} className="flex flex-col w-9/10 h-full shrink-0 items-center justify-center">
                <p className="h-6 font-bold text-center">{post.title}</p>
                <p className="h-14 text-center italic">{post.description}</p>
            </Link>
            
        </div>
    );
}