import { Apartment } from './apartment';
export interface Category {
    id?: number;
    name?: string;
    apartment?: Apartment;
}