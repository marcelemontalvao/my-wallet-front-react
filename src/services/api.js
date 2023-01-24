import axios from "axios"

const baseurl = 'http://localhost:5000'

export const api = axios.create({
    baseURL: baseurl,
    timeout: 4000
})