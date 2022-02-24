import axios from "axios";

export const baseURL = "http://192.168.100.82:8000";

const api = axios.create({ baseURL: `${baseURL}/api` });

export default api;
