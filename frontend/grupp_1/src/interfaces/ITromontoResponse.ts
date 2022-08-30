import IBooking from "./IBooking";
import IPersonal from "./IPersonal";

export default interface ITromontoResponse {
    msg?: string;
    bookings?: IBooking[];
    error?: string;
    personal?: IPersonal[];
}
