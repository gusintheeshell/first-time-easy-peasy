import axios, {AxiosInstance} from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://swapi.dev/api/",
    headers: {
        "Content-Type": "application/json",
    }
})

export default api;