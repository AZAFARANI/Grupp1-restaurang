import axios, { AxiosResponse } from "axios";
import IBooking from "../interfaces/IBooking";
import ITromontoResponse from "../interfaces/ITromontoResponse";
import BookingModel from "../models/Booking";

export default class TramontoService {
    private url = "http://localhost:8000";

    public async getBookings(): Promise<BookingModel[]> {
        const response = await axios.get<ITromontoResponse>(
            this.url + "/bookings"
        );

        if (response.data.error) {
            this.handleError(response);
            return [];
        }

        if (!response.data.bookings) return [];

        return response.data.bookings.map(
            (IBook: IBooking) => new BookingModel(IBook)
        );
    }
    public async getBookingById(id: string): Promise<BookingModel | null> {
        const response = await axios.get<ITromontoResponse>(
            this.url + "/bookings/" + id
        );

        if (response.data.error) {
            this.handleError(response);
            return null;
        }

        if (!response.data.booking) return null;

        return new BookingModel(response.data.booking);
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
