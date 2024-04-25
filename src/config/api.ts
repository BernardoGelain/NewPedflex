import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const fakeApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export { api, fakeApi };
