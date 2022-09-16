import axios from "axios";
import { API_KEY } from '@env'

async function getWeatherData(capital: string) {    
     
    try {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`)
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("ERROR:check axios:", error.message);
            return error.message;
        }else{
            console.log("ERROR: something else", error);
            return "Unexpected error"
        }
    }
}

export default getWeatherData;
