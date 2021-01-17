import axios, { AxiosResponse } from 'axios';

const endpoint: string = "http://localhost:3002";
export class ApiRepositoryClass {
    getMenu() {
        return axios.get(`${endpoint}/api/getMenu`);
    }
    getFooter() {
        return axios.get(`${endpoint}/api/getfooter`);
    }
    getHeader() {
        return axios.get(`${endpoint}/api/getContent`);
    }
    getListResults(query: string | null) {
        return axios.get(`${endpoint}/api/items?q=${query}`);
    }
    getDetailById(query: string | null) {
        return axios.get(`${endpoint}/api/items/${query}`);
    }
    getDetailDescriptionById(query: string | null) {
        return axios.get(`${endpoint}/api/items/${query}/description`);
    }
}