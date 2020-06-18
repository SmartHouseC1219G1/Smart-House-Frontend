import { Province } from './province';
import { Apartment } from './apartment';

export class Address {
    id: number;
    name: string;
    apartment: Apartment;
    province: Province;
}