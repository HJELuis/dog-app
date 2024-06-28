import axios from "axios";
import { useEffect, useState } from "react";

const useFetchDogs = () => {
    const[dogs, setDogs] = useState([]);
    const[error, setError] = useState(false);

    useEffect(()=> {        
        const fetchDogs = async () => {
            try {
                const response = await axios.get("https://api.thedogapi.com/v1/breeds");
                setDogs(response.data);
            }catch {
                setError(true);
            }            
        }        
        fetchDogs();
    },[])

    return {dogs, error};
}
export default useFetchDogs;