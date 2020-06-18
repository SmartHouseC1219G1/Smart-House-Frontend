import { Order } from './order';
export class Customer {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    orders: Order[];
}