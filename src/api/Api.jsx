import axios from "axios";

const API = axios.create({
    baseURL: 'http://54.209.15.185:80'
})

export {
    API
}