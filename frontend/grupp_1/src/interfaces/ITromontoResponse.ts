import IBooking from "./IBooking";

export default interface ITromontoResponse {
    msg?: string;
    bookings?: IBooking[];
    error?: string;
}
