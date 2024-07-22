import axios from "axios";
import { CONFIG } from "../Config";

/**
 * ApiService is a service that provides an instance of axios with a base URL.
 */
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
    return response;

})


export default ApiService
