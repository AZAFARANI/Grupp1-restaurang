import ICustomer from "../interfaces/ICustomer";

export default class CustomerModel {
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public phone: string = "";
    public id: string = "";

    constructor(ICustomer: ICustomer) {
        this.firstName = ICustomer.firstName;
        this.lastName = ICustomer.lastName;
        this.email = ICustomer.firstName;
        this.phone = ICustomer.firstName;
        this.id = ICustomer._id;
    }
}
