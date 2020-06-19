import { Apartment } from './apartment';
export interface Picture {
    id?: number;
    imageUrl?: string;
    apartment?: Apartment;
}
