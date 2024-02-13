import axios from "axios";

const request = axios.create({
    baseURL: "https://api-blog-or30.onrender.com"
});

export default request;