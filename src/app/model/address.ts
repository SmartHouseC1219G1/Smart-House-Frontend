import { Province } from './province';
import { Apartment } from './apartment';

export interface Address {
    id?: number;
    name?: string;
    apartment?: Apartment;
    provinces?: Province;
}
