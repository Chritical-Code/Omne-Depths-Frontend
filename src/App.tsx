import Browse from "./pages/Browse";
import Header from "./components/Header";

export default function App(){
    return(
        <div className="flex flex-col w-full h-full">
            <Header></Header>
            <Browse></Browse>
        </div>
    );
}