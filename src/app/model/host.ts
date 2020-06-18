import { Apartment } from './apartment';
export interface Host {
    id?: number;
    username?: string;
    password?: string;
    email?: string;
    phone?: string;
    apartments?: Apartment[];
}
