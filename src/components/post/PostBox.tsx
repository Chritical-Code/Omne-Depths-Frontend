import type { Post } from "@/types/types";

type PostBoxProps = {
    post: Post,
}

export default function PostBox({post}: PostBoxProps){
    return(
        <div className="flex flex-col items-center w-80 h-20 mt-2 border bg-blue-200">
            <p className="font-bold">{post.title}</p>
            <p>{post.text}</p>
        </div>
    );
}