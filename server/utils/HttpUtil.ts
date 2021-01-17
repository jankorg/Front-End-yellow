
import axios from 'axios';

export class HttpRequest {
    static getRequest(url: string) {
      return axios.get(url);
    }
    static postRequest(url: string, data: object) {
        return axios.post(url, data);
      }
}

