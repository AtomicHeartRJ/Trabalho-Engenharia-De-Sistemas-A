import axios from "axios";

export const api = axios.create({
    // baseURL: "http://localhost:3333" -> APAGUE ESTA LINHA
    baseURL: "https://trabalho-engenharia-de-sistemas-a.onrender.com/" // COLOQUE O SEU LINK AQUI
})