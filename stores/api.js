import axios from "axios";

export const baseURL = "http://localhost:8000";

const api = axios.create({ baseURL: `${baseURL}/api` });

export default api;
