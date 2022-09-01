import IPersonal from "../interfaces/IPersonal";

export default class PersonalModel {
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public phone: string = "";
    public id: string = "";
    public role: string = "";

    constructor(IPersonal: IPersonal) {
        this.firstName = IPersonal.firstName;
        this.lastName = IPersonal.lastName;
        this.email = IPersonal.email;
        this.phone = IPersonal.phone;
        this.id = IPersonal._id;
        this.role = IPersonal.role;
    }
}
