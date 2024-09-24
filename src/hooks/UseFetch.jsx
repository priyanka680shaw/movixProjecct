import { useEffect, useState } from "react"
import { FetchDataFromApi } from "../utils/api"

const UseFetch = (url) => {
    const [data, setData] = useState(null)
    const [loding, setLoding] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoding("loding...")
        setData(null)
        setError(null)
        FetchDataFromApi(url)
        .then((res) => { 
            setLoding(false);
            setData(res) 
        })
        .catch((err) =>{
             setLoding(false); 
             setData("Something went wrong !"); 
             console.log(err) 
        })
    }, [url]);

    return {data , loding , error}
}

export default UseFetch
