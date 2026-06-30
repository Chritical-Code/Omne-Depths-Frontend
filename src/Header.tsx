export default function Header(){
    return(
        <div className="flex h-20 items-center bg-blue-400">
            <div className="flex items-center h-full w-1/4">
                <p className="ml-2">Home</p>
            </div>

            <div className="flex items-center h-full w-2/4">
                <input className="border h-10 w-full"></input>
            </div>

            <div className="flex items-center h-full w-1/4 justify-end">
                <p className="mr-2">Profile</p>
            </div>
        </div>
    );
}