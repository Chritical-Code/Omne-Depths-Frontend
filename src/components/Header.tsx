import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header(){
    return(
        <div className={styles.header}>
            <div className="flex items-center h-full w-1/4 pl-2">
                <Link to="/">Home</Link>
            </div>

            <div className="flex items-center h-full w-2/4">
                <input className="border h-10 w-full"></input>
            </div>

            <div className="flex items-center h-full w-1/4 justify-end pr-2">
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
}