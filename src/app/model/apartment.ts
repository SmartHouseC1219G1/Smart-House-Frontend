import { RoomType } from './roomtype';
import { Address } from './address';
import { Host } from './host';
import { Order } from './order';
import { Category } from './category';
import { Picture } from './picture';
export interface Apartment {
    id?: number;
    name?: string;
    bathroom?: number;
    bedroom?: number;
    priceByDate?: number;
    description?: string;
    pictures?: Picture[];
    categories?: Category[];
    orders?: Order[];
    host?: Host;
    address?: Address;
    roomTypes?: RoomType[];
}
