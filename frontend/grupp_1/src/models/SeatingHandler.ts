import IBookingMinimized from "../interfaces/IBookingMinimized";
import ISeatings, { IDay } from "../interfaces/ISeatings";
import TramontoService from "../services/Tramonto";

const service = new TramontoService();

export const NUMBER_TO_DAY = [
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

    public async fetchBookings(currentWeek: number) {
        this.allBookings = await service.getBookings();
        this.filterCurrentWeekBookings(currentWeek);
    }

    public filterCurrentWeekBookings(currentWeek: number) {
        this.clearWeek();

        this.allBookings.forEach((book: IBookingMinimized) => {
            const bookDate = new Date(book.timestamp);
            const weekStart = this.getDateOfISOWeek(
                currentWeek,
                new Date().getFullYear() // We decided that we cannot book more than 1 year ahead.
            );
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekEnd.getDate() + 6);

            // ### CHECK SO DATE IS CURRENT WEEKS MONDAY OR LATER ###
            if (bookDate.getTime() >= weekStart.getTime()) {
                // ### CHECK SO DATE IS CURRENT WEEKS SUNDAY OR EARLIER ###
                if (bookDate.getTime() <= weekEnd.getTime()) {
                    let day = NUMBER_TO_DAY[bookDate.getDay()];
                    const hour = new Date(book.timestamp).getHours();
                    if (hour === 18) {
                        this.week[day as keyof ISeatings].firstSeating.push(
                            book
                        );
                    } else if (hour === 21) {
                        this.week[day as keyof ISeatings].lastSeating.push(
                            book
                        );
                    }
                }
            }
        });
    }

    private clearWeek() {
        for (const day in this.week) {
            for (const seating in this.week[day as keyof ISeatings]) {
                this.week[day as keyof ISeatings][seating as keyof IDay] = [];
            }
        }
    }

    // ### CALCULATES WEEK OF THE CURRENT YEAR FROM GIVEN DATE ###
    // So you cannot book more than 1 year ahead.
    public getWeek(date: Date) {
        let firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        let numberOfDaysOfYear = Math.floor(
            (date.getTime() - firstDayOfYear.getTime()) / (24 * 60 * 60 * 1000)
        );
        return Math.ceil((date.getDay() + 1 + numberOfDaysOfYear) / 7);
    }

    // ### Returns the monday of given year and week ###
    public getDateOfISOWeek(week: number, year: number) {
        let simple = new Date(year, 0, 1 + (week - 1) * 7);
        let dayOfWeek = simple.getDay();
        let ISOweekStart = simple;
        if (dayOfWeek <= 4)
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        return ISOweekStart;
    }
}
