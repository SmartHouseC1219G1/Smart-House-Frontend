import { Apartment } from './apartment';
export class Status {
    id: number;
    status: boolean;
    startTime: Date;
    endTime: Date;
    apartment: Apartment;
}