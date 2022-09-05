import IBookingMinimized from "./IBookingMinimized";

export default interface ISeatings {
  monday: IDay;
  tuesday: IDay;
  wednesday: IDay;
  thursday: IDay;
  friday: IDay;
  saturday: IDay;
  sunday: IDay;
}

export interface IDay {
  firstSeating: IBookingMinimized[];
  lastSeating: IBookingMinimized[];
}
