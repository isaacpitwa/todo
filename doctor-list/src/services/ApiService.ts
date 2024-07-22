import axios from "axios";

/**
 * ApiService is a service that provides an instance of axios with a base URL.
 */
const ApiService = axios.create({
    baseURL: `https://63c15b437165626718791c6c.mockapi.io/challenge/api`
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
