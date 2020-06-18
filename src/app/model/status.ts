import { Apartment } from './apartment';
export interface Status {
    id?: number;
    status?: boolean;
    startTime?: Date;
    endTime?: Date;
    apartment?: Apartment;
}