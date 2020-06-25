import { Order } from './order';
import { Apartment } from './apartment';
export interface User {
    id?: number;
    name?: string;
    username?: string;
    password?: string;
    email?: string;
    phone?: string;
    apartments?: Apartment[];
    orders?: Order[];
}
