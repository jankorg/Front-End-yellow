import * as rm from 'ramda'

export class DataMapper{
    static getItemStructure(result: any) {
        return rm.pick(['id', 'title', 'price', 'thumbnail', 'condition', 'shipping', 'currency_id', 'sold_quantity'], result);
    }
}