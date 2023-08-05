import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://stayatkyathanamakki.com/server/",
    timeout: 12000,
    headers: { "Content-Type": "application/json" },
})