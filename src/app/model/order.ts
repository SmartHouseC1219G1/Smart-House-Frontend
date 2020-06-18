import { Customer } from './customer';
import { Apartment } from './apartment';
export class Order {
    id: number;
    startTime: Date;
    endTime: Date;
    totalMoney: number;
    apartment: Apartment;
    customer: Customer;
}