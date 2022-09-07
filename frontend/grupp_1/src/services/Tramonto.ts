import axios, { AxiosInstance, AxiosResponse } from "axios";
// ### INTERFACE ###
import IBookingChanges from "../interfaces/IBookingChanges";
import IBookingExtended from "../interfaces/IBookingExtended";
import IBookingMinimized from "../interfaces/IBookingMinimized";
import ICustomer from "../interfaces/ICustomer";
import ICustomerChanges from "../interfaces/ICustomerChanges";
import IEmployeeChanges from "../interfaces/IEmployeeChanges";
import INewBooking from "../interfaces/INewBooking";
import INewEmployee from "../interfaces/INewEmployee";
import IPersonal from "../interfaces/IPersonal";
import ITramontoResponse from "../interfaces/ITramontoResponse";
// ### MODELS ###
import BookingModelExtended from "../models/Booking";
import CustomerModel from "../models/Customer";
import PersonalModel from "../models/Personal";

const transport: AxiosInstance = axios.create({
  withCredentials: true, // Needed to tell Axios we want to send cookies.
});

export default class TramontoService {
  private url = "http://localhost:8000";
  private LOG_RESPONSE = true;

  // ---------------------------------------------------------------
  // ### BOOKINGS ###
  public async getBookings(): Promise<IBookingMinimized[]> {
    const axiosResponse = await transport
      .get<ITramontoResponse>(this.url + "/bookings")
      .catch((error) => {
        return error.response;
      });

    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    if (!axiosResponse.data.bookings) return [];
    return axiosResponse.data.bookings;
  }
  public async getBookingsAuthorized(): Promise<IBookingExtended[]> {
    const axiosResponse = await transport
      .get<ITramontoResponse>(this.url + "/bookings/all")
      .catch((error) => {
        return error.response;
      });

    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    if (!axiosResponse.data.bookings) return [];
    return axiosResponse.data.bookings;
  }
  public async getBookingById(
    bookingId: string,
    customerId: string
  ): Promise<BookingModelExtended | null> {
    const axiosResponse = await transport
      .get<ITramontoResponse>(
        this.url + "/bookings/" + bookingId + `?customerId=${customerId}`,
        {}
      )
      .catch((error) => {
        return error.response;
      });
    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    if (!axiosResponse.data.booking) return null;
    return new BookingModelExtended(axiosResponse.data.booking);
  }
  public async addBooking(newBooking: INewBooking): Promise<ITramontoResponse> {
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
      .put<ITramontoResponse>(
        this.url + "/bookings/" + bookingId + `?customerId=${customerId}`,
        {
          customerId: customerId,
          booking: changesObject,
        }
      )
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
      .delete<ITramontoResponse>(
        this.url + "/bookings/" + bookingId + `?customerId=${customerId}`
      )
      .catch((error) => {
        return error.response;
      });
    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    return axiosResponse.data;
  }
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // ### CUSTOMER ###
  public async getCustomers(): Promise<CustomerModel[]> {
    const axiosResponse = await transport
      .get<ITramontoResponse>(this.url + "/customers")
      .catch((error) => {
        return error.response;
      });

    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    if (!axiosResponse.data.customers) return [];
    return axiosResponse.data.customers.map(
      (ICust: ICustomer) => new CustomerModel(ICust)
    );
  }
  public async getCustomerById(id: string): Promise<CustomerModel | null> {
    const axiosResponse = await transport
      .get<ITramontoResponse>(this.url + "/customers/" + id)
      .catch((error) => {
        return error.response;
      });
    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    if (!axiosResponse.data.customer) return null;
    return new CustomerModel(axiosResponse.data.customer);
  }
  public async getCustomerByEmail(
    email: string
  ): Promise<CustomerModel | null> {
    const axiosResponse = await transport
      .post<ITramontoResponse>(this.url + "/customers", {
        email: email,
      })
      .catch((error) => {
        return error.response;
      });
    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    if (!axiosResponse.data.customer) return null;
    return new CustomerModel(axiosResponse.data.customer);
  }
  public async editCustomer(
    id: string,
    changesObject: ICustomerChanges
  ): Promise<ITramontoResponse> {
    const axiosResponse = await transport
      .put<ITramontoResponse>(this.url + "/customers/" + id, {
        customer: changesObject,
      })
      .catch((error) => {
        return error.response;
      });
    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    return axiosResponse.data;
  }
  public async deleteCustomerr(id: string): Promise<ITramontoResponse> {
    const axiosResponse = await transport
      .delete<ITramontoResponse>(this.url + "/customers/" + id)
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
  public async getEmployeeById(
    employeeId: string
  ): Promise<PersonalModel | null> {
    const axiosResponse = await transport
      .get<ITramontoResponse>(this.url + "/personal/" + employeeId)
      .catch((error) => {
        return error.response;
      });

    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    if (!axiosResponse.data.employee) return null;
    return new PersonalModel(axiosResponse.data.employee);
  }
  public async addEmployee(
    newEmployee: INewEmployee
  ): Promise<ITramontoResponse> {
    const axiosResponse = await transport
      .post<ITramontoResponse>(this.url + "/personal", {
        employee: newEmployee,
      })
      .catch((error) => {
        return error.response;
      });
    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    return axiosResponse.data;
  }
  public async editEmployee(
    id: string,
    changes: IEmployeeChanges
  ): Promise<ITramontoResponse> {
    const axiosResponse = await transport
      .put<ITramontoResponse>(this.url + "/personal/" + id, {
        employee: changes,
      })
      .catch((error) => {
        return error.response;
      });
    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    return axiosResponse.data;
  }
  public async deleteEmployee(id: string): Promise<ITramontoResponse> {
    const axiosResponse = await transport
      .delete<ITramontoResponse>(this.url + "/personal/" + id)
      .catch((error) => {
        return error.response;
      });
    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    return axiosResponse.data;
  }
  // ---------------------------------------------------------------

  // ---------------------------------------------------------------
  // ### LOGIN / LOGOUT ###
  public async tryLogin(
    email: string,
    password: string
  ): Promise<ITramontoResponse> {
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
  public async tryLogout(): Promise<ITramontoResponse> {
    const axiosResponse = await transport
      .post<ITramontoResponse>(this.url + "/personal/logout", {})
      .catch((error) => {
        return error.response;
      });

    if (this.LOG_RESPONSE) this.logResponse(axiosResponse);
    return axiosResponse.data;
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
      "%cURL:\t" +
        response.request.responseURL +
        "\n" +
        "STATUS:\t" +
        (response.status || "No status provided.") +
        "\n" +
        "MSG:\t" +
        (response.data.msg || "No msg provided.") +
        (response.data.error ? "\n" + "ERROR: \t" + response.data.error : ""),
      ["padding: 2px 10px", "font-size: 10pt", "font-style: italic"].join(";")
    );
  }
}
