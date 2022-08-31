import IBooking from "./IBookingExtended";
import IPersonal from "./IPersonal";

export default interface ITramontoResponse {
    msg?: string;
    bookings?: IBooking[];
    booking?: IBooking;
    bookingId?: string;
    error?: string;
    personal?: IPersonal[];
    employee?: IPersonal;
    employeeId?: string;
}
