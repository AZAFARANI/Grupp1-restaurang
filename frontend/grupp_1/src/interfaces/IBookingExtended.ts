import ICustomer from "./ICustomer";

export default interface IBookingExtended {
    customerId: ICustomer;
    guestCount: string;
    timestamp: string;
    allergies: string;
    _id: string;
}
