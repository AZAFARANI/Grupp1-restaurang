import IBooking from "./IBooking";
import IPersonal from "./IPersonal";

export default interface ITromontoResponse {
    msg?: string;
    bookings?: IBooking[];
    booking?: IBooking;
    error?: string;
    personal?: IPersonal[];
}
