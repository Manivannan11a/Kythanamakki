import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://stayatkyathanamakki.com/server/",
    timeout: 6000,
    headers: { "Content-Type": "application/json" },
})