import axios, { AxiosResponse } from "axios";
// ### INTERFACE ###
import IBooking from "../interfaces/IBooking";
import IBookingExtended from "../interfaces/IBookingExtended";
import INewBooking from "../interfaces/INewBooking";
import ITramontoResponse from "../interfaces/ITramontoResponse";
// ### MODELS ###
import BookingModelExtended from "../models/Booking";

export default class TramontoService {
    private url = "http://localhost:8000";

    public async getBookings(): Promise<BookingModelExtended[]> {
        const response = await axios.get<ITramontoResponse>(
            this.url + "/bookings"
        );

        if (response.data.error) {
            this.handleError(response);
            return [];
        }

        if (!response.data.bookings) return [];

        return response.data.bookings.map(
            (IBook: IBookingExtended) => new BookingModelExtended(IBook)
        );
    }
    public async getBookingById(
        id: string
    ): Promise<BookingModelExtended | null> {
        const response = await axios.get<ITramontoResponse>(
            this.url + "/bookings/" + id
        );

        if (response.data.error) {
            this.handleError(response);
            return null;
        }

        if (!response.data.booking) return null;

        return new BookingModelExtended(response.data.booking);
    }
    public async addBooking(
        newBooking: INewBooking
    ): Promise<ITramontoResponse | null> {
        // let TEST: INewBooking = {
        //     firstName: "NONE",
        //     lastName: "NONE",
        //     email: "NONE@NONE.com",
        //     phone: "NONE",
        //     guestCount: 1,
        //     allergies: "TEST ALLERGIES",
        //     timestamp: "2000-01-01T01:01:01.030Z",
        // };

        const response = await axios.post<ITramontoResponse>(
            this.url + "/bookings",
            {
                booking: newBooking,
            }
        );

        if (response.data.error) {
            this.handleError(response);
            return null;
        }
        return response.data;
    }

    public async getCustomers() {}
    public async getCustomerById() {}
    public async getPersonal() {}
    public async getPersonalById() {}

    private handleError(response: AxiosResponse) {
        console.warn(
            "!!!!!!!!!!!! ERROR !!!!!!!!!!!!\n",
            response.data.msg || "No msg provided.",
            response.data.error || "No error provided.",
            response.status
        );
    }

    // public async getMovies(searchText: string): Promise<IMovie[]> {
    //     const response = await axios.get<IOmbdResponse>(
    //         `http://www.omdbapi.com/?apikey=${this.ApiKey}&s=${searchText}`
    //     );

    //     return response.data.Search;
    // }
}
