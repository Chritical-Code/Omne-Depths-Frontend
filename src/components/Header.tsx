import { Link, useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header(){
    const navigate = useNavigate();

    function handleSearch(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const searchString = formData.get("q") as string;

        if(searchString != ""){
            navigate("/search?q=" + searchString, {replace:false});
        }
    }

    return(
        <div className={styles.header}>
            <div className="flex items-center h-full w-1/4 pl-2">
                <Link to="/">Home</Link>
            </div>

            <div className="flex items-center h-full w-2/4">
                <form onSubmit={handleSearch} className="flex items-center h-full w-full">
                    <input name="q" className="border rounded-3xl h-10 w-full pl-2" ></input>
                </form>
            </div>

            <div className="flex items-center h-full w-1/4 justify-end pr-2">
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
}