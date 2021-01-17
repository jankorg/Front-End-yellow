
import { HttpRequest } from '../utils/HttpUtil';

const searchEndPoint = 'https://api.mercadolibre.com/sites/MLA/search?q=:';
const searchItems = 'https://api.mercadolibre.com/items/';

export class SearchRepository {
    static getResultsByName(query: string) {
      const path = `${searchEndPoint}${query}`
      return HttpRequest.getRequest(path);
    }
    static getResultsById(id: string, description: boolean = false) {
        const path = description ? `${searchItems}${id}/description` : `${searchItems}${id}`;
        return HttpRequest.getRequest(path);
    }
}

