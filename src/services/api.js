import axios from "axios";

//URL: https://viacep.com.br/ws/01001000/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;