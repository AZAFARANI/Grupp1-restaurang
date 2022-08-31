import axios, { AxiosInstance, AxiosResponse } from "axios";
// ### INTERFACE ###
import IBooking from "../interfaces/IBooking";
import IBookingChanges from "../interfaces/IBookingChanges";
import IBookingExtended from "../interfaces/IBookingExtended";
import INewBooking from "../interfaces/INewBooking";
import IPersonal from "../interfaces/IPersonal";
import ITramontoResponse from "../interfaces/ITramontoResponse";
// ### MODELS ###
import BookingModelExtended from "../models/Booking";
import PersonalModel from "../models/Personal";

const transport: AxiosInstance = axios.create({
    withCredentials: true, // Needed to tell Axios we want to send cookies.
});

export default class TramontoService {
    private url = "http://localhost:8000";
    private LOG_RESPONSE = true;

    // ---------------------------------------------------------------
    // ### BOOKINGS ###
    public async getBookings(): Promise<BookingModelExtended[]> {
        const axiosResponse = await transport
            .get<ITramontoResponse>(this.url + "/bookings")
            .catch((error) => {
                return error.response;
            });

        if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
        if (!axiosResponse.data.bookings) return [];
        return axiosResponse.data.bookings.map(
            (IBook: IBookingExtended) => new BookingModelExtended(IBook)
        );
    }
    public async getBookingById(
        id: string
    ): Promise<BookingModelExtended | null> {
        const axiosResponse = await transport
            .get<ITramontoResponse>(this.url + "/bookings/" + id)
            .catch((error) => {
                return error.response;
            });
        if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
        if (!axiosResponse.data.booking) return null;
        return new BookingModelExtended(axiosResponse.data.booking);
    }
    public async addBooking(
        newBooking: INewBooking
    ): Promise<ITramontoResponse> {
        const axiosResponse = await transport
            .post<ITramontoResponse>(this.url + "/bookings", {
                booking: newBooking,
            })
            .catch((error) => {
                return error.response;
            });
        if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
        return axiosResponse.data;
    }
    public async editBooking(
        bookingId: string,
        customerId: string,
        changesObject: IBookingChanges
    ): Promise<ITramontoResponse> {
        const axiosResponse = await transport
            .put<ITramontoResponse>(this.url + "/bookings/" + bookingId, {
                customerId: customerId,
                booking: changesObject,
            })
            .catch((error) => {
                return error.response;
            });
        if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
        return axiosResponse.data;
    }
    public async deleteBooking(
        bookingId: string,
        customerId: string
    ): Promise<ITramontoResponse> {
        const axiosResponse = await transport
            .delete<ITramontoResponse>(this.url + "/bookings/" + bookingId, {
                data: {
                    customerId: customerId,
                },
            })
            .catch((error) => {
                return error.response;
            });
        if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
        return axiosResponse.data;
    }
    // ---------------------------------------------------------------

    // ---------------------------------------------------------------
    // ### PERSONAL ###
    public async getPersonal(): Promise<PersonalModel[]> {
        const axiosResponse = await transport
            .get<ITramontoResponse>(this.url + "/personal")
            .catch((error) => {
                return error.response;
            });

        if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
        if (!axiosResponse.data.personal) return [];
        return axiosResponse.data.personal.map(
            (IPers: IPersonal) => new PersonalModel(IPers)
        );
    }
    public async getPersonalById() {}
    public async addPersonal() {}
    public async editPersonal() {}
    public async deletePersonal() {}
    public async tryLogin(email: string, password: string) {
        const axiosResponse = await transport
            .post<ITramontoResponse>(this.url + "/personal/login", {
                credentials: {
                    email: email,
                    password: password,
                },
            })
            .catch((error) => {
                return error.response;
            });

        if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
        return axiosResponse.data;
    }
    public async tryLogout() {
        document.cookie;
    }
    // ---------------------------------------------------------------

    private logResponse(response: AxiosResponse<ITramontoResponse>) {
        console.log(
            `%c--- RESPONSE ---`,
            [
                "color: white",
                "background-color: #55AF3A",
                "padding: 10px",
                "border-radius: 5px",
                "font-size: 12pt",
            ].join(";")
        );
        console.log(
            "%cSTATUS:\t" +
                (response.status || "No status provided.") +
                "\n" +
                "MSG:\t" +
                (response.data.msg || "No msg provided.") +
                "\n" +
                "ERROR: \t" +
                (response.data.error || "No error."),
            ["padding: 2px 10px", "font-size: 10pt", "font-style: italic"].join(
                ";"
            )
        );
    }
}
