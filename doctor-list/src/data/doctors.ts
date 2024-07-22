import ApiService from "../services/ApiService"

export const getDoctors = async () => {
    try {
        const response = await ApiService.get(`/doctors`)
        return response.data
    } catch (error) {
        console.log("Error fetching Todos: " + error)
    }
}