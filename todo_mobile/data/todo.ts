import ApiService from "../services/ApiService"

export const addTodo = async (task: string)=>{
    try {
        const response = await ApiService.post(`/addTodo`, {
            task:task
        })
        console.log("AddTodo response: ", response.data)
        return response.data
    } catch (error) {
        console.log("Error Adding Todo: " + error)

    }
}

export const getTodos = async ()=>{
    try {
        const response = await ApiService.get(`/getTodos`)
        return response.data
    } catch (error) {
        console.log("Error fetching Todos: " + error)
    }
}

export const markTodoAsCompleted = async (id: number)=>{
    try {
        const response = await ApiService.put(`/updateTodoStatus?id=${id}`)
        return response.data
    } catch (error) {
        console.log("Error marking Todo as completed: " + error)
    }
}