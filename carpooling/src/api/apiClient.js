import axios from "axios";

const API_KEY = "";
const BASE_URL = "https://task-4-2.onrender.com"; 

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`,
  },
});

export default apiClient;
