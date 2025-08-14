import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const api = new axios.create({
  baseURL: apiUrl,
});

// Interceptador para adicionar o token Bearer em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.trim()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
