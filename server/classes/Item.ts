import {Price} from './Price'

export class Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    freeShipping: boolean;
    soldQuantity: number;
    description: string;
}