import IBooking from "./IBookingExtended";
import ICustomer from "./ICustomer";
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
    customers?: ICustomer[];
    customer?: ICustomer;
    customerId?: string;
}
