import axios from "axios";
export const authClient = axios.create({
  baseURL: "http://localhost:8000/api/auth",
});

export const articleClient = axios.create({
  baseURL: "http://localhost:8000/api/articles",
  headers: {
    "Content-Type": "application/json",
  },
});
