import IBooking from "../interfaces/IBooking";
import IBookingMinimized from "../interfaces/IBookingMinimized";
import ISeatings, { IDay } from "../interfaces/ISeatings";
import TramontoService from "../services/Tramonto";

const service = new TramontoService();

const NUMBER_TO_DAY = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export default class SeatingHandler {
  public allBookings: IBookingMinimized[] = [];
  public doneFetching = false;
  public currentWeek = -1;

  public week: ISeatings = {
    monday: {
      firstSeating: [],
      lastSeating: [],
    },
    tuesday: {
      firstSeating: [],
      lastSeating: [],
    },
    wednesday: {
      firstSeating: [],
      lastSeating: [],
    },
    thursday: {
      firstSeating: [],
      lastSeating: [],
    },
    friday: {
      firstSeating: [],
      lastSeating: [],
    },
    saturday: {
      firstSeating: [],
      lastSeating: [],
    },
    sunday: {
      firstSeating: [],
      lastSeating: [],
    },
  };

  constructor(currentWeek: number) {
    this.fetchBookings();
    this.currentWeek = currentWeek;
  }

  private fetchBookings() {
    service.getBookings().then((bookings: IBookingMinimized[]) => {
      this.allBookings = bookings;
      this.doneFetching = true;
      this.filterCurrentWeekBookings();
    });
  }

  private filterCurrentWeekBookings() {
    this.allBookings.forEach((book: IBookingMinimized) => {
      const bookDate = new Date(book.timestamp);
      const bookWeek = this.getWeek(bookDate);

      const weekStart = this.getDateOfISOWeek(
        bookWeek,
        new Date().getFullYear()
      );
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);

      if (bookDate.getTime() >= weekStart.getTime()) {
        if (bookDate.getTime() <= weekEnd.getTime()) {
          this.addSeating(book, NUMBER_TO_DAY[bookDate.getDay()]);
        }
      }

      //   if (bookWeek === this.currentWeek) {
      //     this.weekDays[bookDate.getDay()].push(book);
      //   }
    });
  }

  private addSeating(book: IBookingMinimized, day: string) {
    const hour = new Date(book.timestamp).getHours();
    // if (hour === 18) {
    //     this.week[day].
    //   day.firstSeating.push(book);
    // } else if (hour === 21) {
    //   day.lastSeating.push(book);
    // }
  }

  // ### CALCULATES WEEK OF THE CURRENT YEAR FROM GIVEN DATE ###
  // So you cannot book more than 1 year ahead.
  private getWeek(date: Date) {
    let firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    let numberOfDaysOfYear = Math.floor(
      (date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000)
    );
    return Math.ceil((date.getDay() + 1 + numberOfDaysOfYear) / 7);
  }

  private getDateOfISOWeek(week: number, year: number) {
    let simple = new Date(year, 0, 1 + (week - 1) * 7);
    let dayOfWeek = simple.getDay();
    let ISOweekStart = simple;
    if (dayOfWeek <= 4)
      ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
  }
}
