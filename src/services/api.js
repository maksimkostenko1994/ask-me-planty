import axios from "axios";

const $host = axios.create({
    baseURL: `https://ask-me-planty-server.herokuapp.com`
    //baseURL: `http://localhost:8000`
})

const $authHost = axios.create({
    //baseURL: `https://ask-me-planty-server.herokuapp.com`
    baseURL: `http://localhost:8000`
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}