import IBooking from "../interfaces/IBooking";

export default class BookingModel {
    public customerId: string = "";
    public guestCount: number = -1;
    public timestamp: Date;
    public allergies: string = "";

    constructor(IBooking: IBooking) {
        this.customerId = IBooking.customerId;
        this.guestCount = parseInt(IBooking.guestCount);
        this.timestamp = new Date(IBooking.timestamp);
        this.allergies = IBooking.allergies;
    }
}
