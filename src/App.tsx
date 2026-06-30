import Browse from "./Browse";
import Header from "./Header";

export default function App(){
    return(
        <div className="flex flex-col w-full h-full">
            <Header></Header>
            <Browse></Browse>
        </div>
    );
}