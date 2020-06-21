import { Apartment } from './apartment';
export interface RoomType {
    id?: string;
    name?: string;
    apartments?: Apartment[];
}
