import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3333',
});

const fakeApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export { api, fakeApi };
