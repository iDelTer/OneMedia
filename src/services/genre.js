import { apiEndpointGetGenres } from "../utils/endpoints"

export const getGenres = async () => {
    try{
        const response = await fetch(apiEndpointGetGenres, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await response.json();
        console.log(data)

        return data;
    }
    catch (error){
        console.error(error)
    }
}