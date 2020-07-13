import axios from "axios";

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  'Authorization': token || undefined
}

export default axios.create({
  baseURL: "http://localhost:4444/api/",
  responseType: "json",
  headers
}); 

