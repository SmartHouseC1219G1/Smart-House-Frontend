import { User } from './user';
import { Apartment } from './apartment';
export interface Comment {
    id?: number,
    comment?: string,
    apartment?: Apartment,
    user?: User,
}