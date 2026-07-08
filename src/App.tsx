import Browse from "./pages/Browse";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

export default function App(){
    return(
        <BrowserRouter>
            <div className="flex flex-col w-full h-full">
                <Header></Header>
                
                <Routes>
                    <Route path="/" element={<Browse />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}