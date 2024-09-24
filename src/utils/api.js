import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3" ; 

const AccessToken = import.meta.env.VITE_APP_ACCESS_TOKEN;
const AccessKey = import.meta.env.VITE_APP_Key


// const headers = {
//     Authorization: "Bearer" + TMDB_TOKEN
// }
const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${AccessToken}`
  }

export const FetchDataFromApi = async(url , params)=>{
    try{
        const {data} = await axios.get(BASE_URL+url  , {
            headers,
            params
        })
        return data;
    }
    catch(err){
        console.log("token" , err)
    }
}