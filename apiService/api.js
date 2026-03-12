import axios from "axios";

const API_URL = "https://greenco-backend.onrender.com/api/v1/common";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});