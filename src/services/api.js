import axios from "axios"

const REACT_APP_API_URL = "http://localhost:5000";

export const api = axios.create({
    baseURL: REACT_APP_API_URL,
    timeout: 4000
})