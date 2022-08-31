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
        this.lastName = IPersonal.firstName;
        this.email = IPersonal.firstName;
        this.phone = IPersonal.firstName;
        this.id = IPersonal._id;
    }
}
