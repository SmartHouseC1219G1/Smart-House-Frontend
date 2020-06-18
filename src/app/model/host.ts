import { Apartment } from './apartment';
export class Host {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    apartments: Apartment[];
}
