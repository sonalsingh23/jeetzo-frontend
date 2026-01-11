import axios from "axios";

const api = axios.create({
  baseURL: "https://admin-backend-lle2.onrender.com/api", // 👈 adjust if needed
});

// attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
