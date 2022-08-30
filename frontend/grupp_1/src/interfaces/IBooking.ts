import ICustomer from "./ICustomer";

export default interface IBooking {
    customerId: ICustomer;
    guestCount: string;
    timestamp: string;
    allergies: string;
}
