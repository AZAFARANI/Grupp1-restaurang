import IBookingExtended from "../interfaces/IBookingExtended";
import CustomerModel from "./Customer";

export default class BookingModel {
    public customer: CustomerModel;
    public guestCount: number = -1;
    public timestamp: Date;
    public allergies: string = "";
    public id: string = "";

    constructor(IBooking: IBookingExtended) {
        this.customer = new CustomerModel(IBooking.customerId);
        this.guestCount = parseInt(IBooking.guestCount);
        this.timestamp = new Date(IBooking.timestamp);
        this.allergies = IBooking.allergies;
        this.id = IBooking._id;
    }
}
