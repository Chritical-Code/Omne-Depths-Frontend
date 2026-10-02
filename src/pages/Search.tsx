import { useSearchParams } from 'react-router-dom';

export default function Search(){
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('query') || '';

    return(
        <div className="flex flex-col items-center">
            <p className="font-bold">Search Page</p>
        </div>
    );
}