import Axios from "axios";

const http = Axios.create({
    baseURL: "http://localhost:5000/api/",
    withCredentials:true,
})

export default http;