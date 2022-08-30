import IBooking from "../interfaces/IBooking";
import CustomerModel from "./Customer";

export default class BookingModel {
    public customer: CustomerModel;
    public guestCount: number = -1;
    public timestamp: Date;
    public allergies: string = "";

    constructor(IBooking: IBooking) {
        this.customer = new CustomerModel(IBooking.customerId);
        this.guestCount = parseInt(IBooking.guestCount);
        this.timestamp = new Date(IBooking.timestamp);
        this.allergies = IBooking.allergies;
    }
}
