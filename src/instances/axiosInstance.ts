import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL:"https://portfolio-api.benedictus-danielle.com"
})