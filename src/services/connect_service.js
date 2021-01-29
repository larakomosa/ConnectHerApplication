import axios from 'axios';

export const connect_service = axios.create({
    baseURL: '/api',
});