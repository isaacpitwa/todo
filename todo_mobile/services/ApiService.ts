import axios from "axios";
import { CONFIG } from "../Config";

const ApiService = axios.create({
    baseURL: `${CONFIG.API_BASE_URL}`
});

ApiService.interceptors.request.use(async (config) => {
    return config;
}, (error) => {
    console.log("Error in  API Request: " + error)
    return Promise.reject(error);
});

ApiService.interceptors.response.use((response)=>{
     console.log("Response Status: ", response.data.status);
    return response;

})


export default ApiService
