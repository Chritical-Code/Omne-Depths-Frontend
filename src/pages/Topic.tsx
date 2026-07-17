import { useParams } from "react-router-dom";

export default function Topic(){
    const {topic} = useParams();

    return(
        <div className="flex h-full w-full">
            <p className="ml-2">Topic: {topic}</p>
        </div>
    );
}