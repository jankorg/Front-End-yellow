
import { SearchRepository } from '../repository/SearchRepository'
import { SearchResults } from '../classes/SearchResults'
import { Item } from '../classes/Item'
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataMapper } from './DataMapper';

export class SearchMapper {
    query: string;
    result: SearchResults;
    items: Item[];
    constructor(){
        this.query='/'
        this.result = new SearchResults();
    }

    getDetailResults(result: any) {
        const item: any = DataMapper.getItemStructure(result)
        return this.getItemObj(item);
    }

    getListResults(data: any) {
        const source = of(data);
        const transform = source.pipe(map(({ results, filters }) => {
            this.result.author = {name: "Juan",lastname:"Rodriguez" };
            this.result.categories = filters.map((fil: any) => fil.values.map((val: any) => val.name));
            this.result.items = this.getItems(results);
            return this.result;
        }));
        return transform;
    }
    getItems(results: [any]) {
        const ItemArr = [] as Item[];
        results.map((result) => {
            const item: any = DataMapper.getItemStructure(result);
            ItemArr.push(this.getItemObj(item));
        });
        return ItemArr;
    }
    getItemObj(item: any){
        const itewObj: Item = {   id: item.id,
            title: item.title,
            price: {currency:item.currency_id, amount: item.price, decimals: item.price - Math.floor(item.price)},
            picture: item.thumbnail,
            condition: item.condition,
            freeShipping: item.shipping.free_shipping,
            soldQuantity: 0,
            description: '',
        }
        return item;
    }

}