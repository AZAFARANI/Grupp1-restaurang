import IBooking from "./IBookingExtended";
import IPersonal from "./IPersonal";

export default interface ITramontoResponse {
    msg?: string;
    bookings?: IBooking[];
    booking?: IBooking;
    error?: string;
    personal?: IPersonal[];
}
