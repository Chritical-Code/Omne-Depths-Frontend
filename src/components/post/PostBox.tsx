import type { Post } from "@/types/types";
import { Link } from "react-router-dom";

type PostBoxProps = {
    post: Post,
}

export default function PostBox({post}: PostBoxProps){
    return(
        <div className="flex flex-col items-center w-90 md:w-180 mt-2 border bg-blue-200 overflow-clip shrink-0 p-2">
            <Link to={"/post/" + post.id} className="flex flex-col w-full h-full shrink-0 items-center justify-center">
                <p className="font-bold text-center">{post.title}</p>
                <p className="text-center italic">{post.description}</p>
            </Link>
        </div>
    );
}