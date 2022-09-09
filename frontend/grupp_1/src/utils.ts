export const WEEK_DAYS_SWEDISH = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
];
export const MONTH_NAMES_SWEDISH = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
];

export function getValuesFromTimeStamp(bookingTimestamp: string): string {
    //-- Retrieves the booking object's timestamp and extracts the date --//
    let bookingDateToDateObjekt = new Date(bookingTimestamp);
    let dayNumber = bookingDateToDateObjekt.getDate();

    //-- Variable with a correctly entered index value of the date object --//
    let dayName = WEEK_DAYS_SWEDISH[bookingDateToDateObjekt.getDay()];

    //-- Variable with a correctly entered index value of the date object --//
    let monthName = MONTH_NAMES_SWEDISH[bookingDateToDateObjekt.getMonth()];
    return `${dayName} ${dayNumber} ${monthName}`;
}

export function scrollToMain() {
    document.querySelector("#scrollToMain")?.scrollIntoView(true);
}

export function getDivClassNames(
    step: number,
    targetStep: number,
    shouldSwitch: boolean
) {
    return `${step === targetStep ? "visible" : "hidden"} ${
        shouldSwitch ? "fadeOut" : ""
    }`;
}
