import { Order } from './order';
export interface Customer {
    id?: number;
    username?: string;
    password?: string;
    email?: string;
    phone?: string;
    orders?: Order[];
}
