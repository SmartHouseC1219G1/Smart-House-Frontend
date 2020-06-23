import { StatusOrders } from './status-order';
import { Customer } from './customer';
import {Apartment} from './apartment';

export interface Order {
    id?: number;
    startTime?: Date;
    endTime?: Date;
    totalMoney?: number;
    apartment?: Apartment;
    customer?: Customer;
    statusOrders?: StatusOrders;
}
