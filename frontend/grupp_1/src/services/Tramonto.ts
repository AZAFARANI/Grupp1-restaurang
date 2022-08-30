import axios from "axios";
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
            console.warn(
                "!!!!!!!!!!!! ERROR !!!!!!!!!!!!\n",
                response.data.msg || "No msg provided.",
                response.data.error,
                response.status
            );
            return [];
        }

        if (!response.data.bookings) return [];

        return response.data.bookings.map(
            (IBook: IBooking) => new BookingModel(IBook)
        );
    }
    public async getBookingById(id: string) {
        const response = await axios.get<ITromontoResponse>(
            this.url + "/bookings/" + id
        );

        if (response.data.error) {
            console.warn(
                "!!!!!!!!!!!! ERROR !!!!!!!!!!!!\n",
                response.data.msg || "No msg provided.",
                response.data.error,
                response.status
            );
            return [];
        }

        if (!response.data.bookings) return [];

        return response.data.bookings.map(
            (IBook: IBooking) => new BookingModel(IBook)
        );
    }
    public async getCustomers() {}
    public async getCustomerById() {}
    public async getPersonal() {}
    public async getPersonalById() {}

    // public async getMovies(searchText: string): Promise<IMovie[]> {
    //     const response = await axios.get<IOmbdResponse>(
    //         `http://www.omdbapi.com/?apikey=${this.ApiKey}&s=${searchText}`
    //     );

    //     return response.data.Search;
    // }
}
