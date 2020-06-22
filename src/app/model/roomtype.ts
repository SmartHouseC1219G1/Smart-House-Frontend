import { Apartment } from './apartment';
export interface RoomType {
    id?: number;
    name?: string;
    apartments?: Apartment[];
}
