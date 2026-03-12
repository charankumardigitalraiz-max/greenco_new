import axios from "axios";

const API_URL = "http://localhost:9001/api/v1/common";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});