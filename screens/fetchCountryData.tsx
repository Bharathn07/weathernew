import axios from "axios";

async function getCountryData(countryName: any) {
    let name = countryName.toLowerCase()
    
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)        
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("ERROR:check axios:", error.message);
            return '404';
        }else{
            console.log("ERROR: something else", error);
            return "404"
        }
    }
}

export default getCountryData;

