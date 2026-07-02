export default function Header(){
    return(
        <div className="flex h-20 items-center bg-blue-400">
            <div className="flex items-center h-full w-1/4 pl-2">
                <p>Home</p>
            </div>

            <div className="flex items-center h-full w-2/4">
                <input className="border h-10 w-full"></input>
            </div>

            <div className="flex items-center h-full w-1/4 justify-end pr-2">
                <p>Profile</p>
            </div>
        </div>
    );
}