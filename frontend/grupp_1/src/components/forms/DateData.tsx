import { FormEvent, useEffect, useState } from "react";
// ### INTERFACES ###
import IBookingMinimized from "../../interfaces/IBookingMinimized";
import INewBooking from "../../interfaces/INewBooking";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import ISeatings from "../../interfaces/ISeatings";
// ### MODELS ###
import SeatingHandler, { NUMBER_TO_DAY } from "../../models/SeatingHandler";
// ### STYLED COMPONENTS ###
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { Span } from "../Styled/Span";

const DAYS_OF_WEEK = [
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
    "Söndag",
];

interface IDateDataProps {
    moveForward(): void;
    moveBackward(): void;
    handleNewBooking(changes: INewBookingOptional): void;
    currentBooking: INewBooking;
}

const seatingHandler = new SeatingHandler();

export const DateData = (props: IDateDataProps) => {
    const REFRESH_DELAY = 1500; // In milliseconds
    const TABLE_CAPACITY = 6;
    const AVALIBLE_TABLES = 15;
    const MAX_GUEST_COUNT = TABLE_CAPACITY * AVALIBLE_TABLES;

    const [week, setWeek] = useState(-1);
    const [earliestWeek, setEarliestWeek] = useState(-1);

    const [chosenTime, setChosenTime] = useState<Date | null>(null);

    const [currentWeekMonday, setCurrentWeekMonday] = useState<Date>(
        new Date(0)
    );

    const [doneFetching, setDoneFetching] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (chosenTime) {
            props.handleNewBooking({ timestamp: chosenTime.toISOString() });
        }
    }

    // ------------------------------------------------------
    // ### CALCULATE CURRENT WEEK ###
    useEffect(() => {
        let week = seatingHandler.getWeek(new Date()) - 1;
        let currentMonday = seatingHandler.getDateOfISOWeek(
            week,
            new Date().getFullYear()
        );
        setCurrentWeekMonday(currentMonday);
        setEarliestWeek(week);
        setWeek(week);
        if (props.currentBooking.timestamp.length > 0)
            setChosenTime(new Date(props.currentBooking.timestamp));
    }, []);
    function nextWeek() {
        setWeek(week + 1);
    }
    function previousWeek() {
        if (week > earliestWeek) setWeek(week - 1);
    }

    // ------------------------------------------------------

    // ------------------------------------------------------
    // ### BOOKINGS ###
    useEffect(() => {
        if (!doneFetching && week !== -1) {
            triggerFetch();
        }
    }, [week]);

    useEffect(() => {
        if (doneFetching) {
            seatingHandler.filterCurrentWeekBookings(week);
            let currentMonday = seatingHandler.getDateOfISOWeek(
                week,
                new Date().getFullYear()
            );
            setCurrentWeekMonday(currentMonday);
        }
    }, [week]);

    function triggerFetch() {
        seatingHandler.fetchBookings(week).then(() => {
            seatingHandler.filterCurrentWeekBookings(week);
            setDoneFetching(true);
        });
    }

    // ------------------------------------------------------
    // ### CALCULATION ###

    function createDay(
        nameOfDay: string,
        currentWeekMonday: Date,
        index: number
    ) {
        // ### CALCULATE IF BUTTON SHOULD BE SELECTABLE ###
        let day = NUMBER_TO_DAY[currentWeekMonday.getDay()];
        let dayBookings = seatingHandler.week[day as keyof ISeatings];

        // CHECK IF FIRST SEATING IS AVALIBLE
        let showFirstSeating = calculateAvalibility(dayBookings.firstSeating);
        // CHECK IF LAST SEATING IS AVALIBLE
        let showLastSeating = calculateAvalibility(dayBookings.lastSeating);

        let dayAlreadyPassed = false;

        if (currentWeekMonday.getTime() < new Date().getTime()) {
            showFirstSeating = false;
            showLastSeating = false;
            dayAlreadyPassed = true;
        }

        // ### CREATE DATE STRING ###
        const timeString = currentWeekMonday.toLocaleDateString();
        const isoString = currentWeekMonday.toISOString();
        // ### INCREASE DATE BY ONE DAY ###
        currentWeekMonday.setDate(currentWeekMonday.getDate() + 1);
        let html = (
            <Div
                width="100%"
                widthLaptop="calc(100% / 7)"
                alignItemsLaptop="stretch"
                key={index}
            >
                {/* DAY */}
                <Div
                    flexDirection="row"
                    flexDirectionLaptop="column"
                    justifyContent="space-between"
                    padding="20px 0 0 0"
                >
                    {/* DAY NAME */}
                    <Span
                        color="#FFFFFF"
                        shadow="2px 4px 4px hsla(0, 0%, 0%, 0.80)"
                        fontSize="16pt"
                        fontSizeTablet="20pt"
                        fontSizeLaptop="16pt"
                    >
                        {nameOfDay}
                    </Span>
                    {/* DAY AND MONTH */}
                    <Span
                        color="#FFFFFF"
                        shadow="2px 4px 4px hsla(0, 0%, 0%, 0.80)"
                        fontSize="16pt"
                        fontSizeTablet="20pt"
                        fontSizeLaptop="10pt"
                    >
                        {timeString}
                    </Span>
                </Div>
                {/* SEATINGS BUTTONS */}
                <Div
                    flexDirection="row"
                    flexDirectionLaptop="column"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="15px 0 0 0"
                    gapLaptop="10px"
                    gap="20px"
                >
                    {/* FIRST SEATING */}
                    <Button
                        id={`form-3-${day}-first-seating`}
                        width="95%"
                        height="80px"
                        onClick={() => {
                            const seating = new Date(isoString);
                            seating.setHours(18, 0, 0);
                            setChosenTime(seating);
                        }}
                        className={`${
                            showFirstSeating ? "active" : "disabled"
                        }`}
                        type="button"
                        border="1px solid white"
                        borderRadius="none"
                        background="#D9D9D9"
                    >
                        <Span
                            color="#000000"
                            textAlign="center"
                            fontSizeLaptop="10pt"
                        >
                            {dayAlreadyPassed
                                ? "---"
                                : showFirstSeating
                                ? "18:00-21:00"
                                : "Fullbokat"}
                        </Span>
                    </Button>
                    {/* LAST SEATING */}
                    <Button
                        id={`form-3-${day}-second-seating`}
                        width="95%"
                        height="80px"
                        onClick={() => {
                            const seating = new Date(isoString);
                            seating.setHours(21, 0, 0);
                            setChosenTime(seating);
                        }}
                        className={`${showLastSeating ? "active" : "disabled"}`}
                        type="button"
                        border="1px solid white"
                        borderRadius="none"
                        background="#D9D9D9"
                        // padding="20px"
                    >
                        <Span
                            color="#000000"
                            textAlign="center"
                            fontSizeLaptop="10pt"
                        >
                            {dayAlreadyPassed
                                ? "---"
                                : showLastSeating
                                ? "21:00-00:00"
                                : "Fullbokat"}
                        </Span>
                    </Button>
                </Div>
            </Div>
        );

        return html;
    }

    function calculateAvalibility(seatings: IBookingMinimized[]) {
        const guestsToAdd = props.currentBooking.guestCount;
        const newTablesRequired = Math.ceil(guestsToAdd / TABLE_CAPACITY);

        let totalGuests = 0;
        let neededTables = 0;

        seatings.forEach((booking: IBookingMinimized) => {
            totalGuests += booking.guestCount;
            neededTables += Math.ceil(booking.guestCount / TABLE_CAPACITY);
        });

        // console.log("TOTAL GUESTS: ", totalGuests);
        // console.log("TOTAL TABLES: ", neededTables);

        if (neededTables + newTablesRequired <= AVALIBLE_TABLES) {
            if (totalGuests + guestsToAdd <= MAX_GUEST_COUNT) return true;
        }
        return false;
    }

    let startOfSelectedWeek = new Date(currentWeekMonday);
    return (
        <Form id="form-3">
            {doneFetching ? (
                <Div>
                    {/* SELECT WEEK */}
                    <Div
                        padding="20px 0 0 0"
                        height="auto"
                        flexDirectionLaptop="row"
                        justifyContentLaptop="space-between"
                    >
                        <Div
                            flexDirection="row"
                            justifyContent="space-between"
                            widthTablet="60%"
                            widthLaptop="100%"
                        >
                            <Button
                                id="prevoius-week-button"
                                type="button"
                                padding="8px 14px"
                                background="#A3A380"
                                onClick={previousWeek}
                            >
                                <Image
                                    src="/svg/left-arrow-form.svg"
                                    alt="left-arrow"
                                    width="40px"
                                    height="30px"
                                ></Image>
                            </Button>
                            <Div justifyContent="center">
                                <Span fontSize="12pt" fontSizeTablet="16pt">
                                    Vecka {week}
                                </Span>
                            </Div>
                            <Button
                                id="next-week-button"
                                type="button"
                                padding="8px 14px"
                                background="#A3A380"
                                onClick={nextWeek}
                            >
                                <Image
                                    src="/svg/right-arrow.svg"
                                    alt="right-arrow"
                                    width="40px"
                                    height="30px"
                                ></Image>
                            </Button>
                        </Div>
                        <Div
                            padding="60px 0 0 0"
                            paddingLaptop="0"
                            alignItemsLaptop="flex-end"
                        >
                            <Button
                                id="form-3-refresh-button"
                                type="button"
                                background="#A3A380"
                                padding="8px 14px"
                                onClick={() => {
                                    setDoneFetching(false);
                                    setTimeout(() => {
                                        triggerFetch();
                                    }, REFRESH_DELAY);
                                }}
                            >
                                <Image
                                    src="/svg/Refresh-date.svg"
                                    alt="Refresh Weeks"
                                    width="30px"
                                    height="30px"
                                ></Image>
                            </Button>
                        </Div>
                    </Div>
                    {/* CALENDAR */}
                    <Div
                        flexDirectionLaptop="row"
                        justifyContent="center"
                        height="auto"
                    >
                        {/* SINGLE DAY*/}
                        {DAYS_OF_WEEK.map((day, index) => {
                            if (currentWeekMonday) {
                                return createDay(
                                    day,
                                    startOfSelectedWeek,
                                    index
                                );
                            } else return <></>;
                        })}
                    </Div>
                    {/* SELECTED SEATING */}
                    <Div padding="40px">
                        <Span fontSize="14pt" fontWeight="bold">
                            Du har valt :
                        </Span>
                        <Div justifyContent="center" alignItems="center">
                            <Div width="auto" height="auto">
                                <Span fontSize="20pt" color="#686868">
                                    {chosenTime
                                        ? chosenTime?.toLocaleDateString()
                                        : "Ingen tid vald"}
                                </Span>
                            </Div>
                            <Div width="auto" height="auto">
                                <Span fontSize="18pt" color="#686868">
                                    {chosenTime
                                        ? "Klockan: " +
                                          chosenTime
                                              ?.toLocaleTimeString()
                                              .substring(0, 5)
                                        : ""}
                                </Span>
                            </Div>
                        </Div>
                    </Div>
                    {/* BUTTONS */}
                    <Div
                        flexDirection="row"
                        justifyContent="space-between"
                        height="auto"
                        padding="0 0 20px 0"
                    >
                        {/* BACKWARD BUTTON */}
                        <Button
                            id="form-3-back-button"
                            type="button"
                            padding="15px 35px"
                            paddingTablet="12px 38px"
                            background="#A3A380"
                            onClick={(e) => {
                                handleSubmit(e);
                                props.moveBackward();
                            }}
                        >
                            <Image
                                src="/svg/left-arrow.svg"
                                alt="left-arrow"
                                height="30px"
                                width="40px"
                            ></Image>
                        </Button>
                        {/* FORWARD BUTTON */}
                        <Button
                            id="form-3-forward-button"
                            type="button"
                            padding="15px 24px"
                            paddingTablet="9px 27px"
                            background="#A3A380"
                            onClick={(e) => {
                                handleSubmit(e);
                                if (chosenTime) props.moveForward();
                            }}
                        >
                            <Span
                                color="white"
                                fontSize="17pt"
                                fontSizeTablet="18pt"
                            >
                                Nästa
                            </Span>
                        </Button>
                    </Div>
                </Div>
            ) : (
                <Div>
                    <Div className="spinner" margin="20px"></Div>
                </Div>
            )}
        </Form>
    );
};
