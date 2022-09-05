import { useEffect, useState } from "react";
import IBookingMinimized from "../../interfaces/IBookingMinimized";
import INewBooking from "../../interfaces/INewBooking";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import ISeatings from "../../interfaces/ISeatings";
import SeatingHandler, { NUMBER_TO_DAY } from "../../models/SeatingHandler";
import "../../scss/Booking.scss";
import TramontoService from "../../services/Tramonto";
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
    const [week, setWeek] = useState(-1);
    const [earliestWeek, setEarliestWeek] = useState(-1);

    const [chosenTime, setChosenTime] = useState<Date | null>(null);
    const [currentWeekMonday, setCurrentWeekMonday] = useState<Date>(
        new Date(0)
    );

    const [doneFetching, setDoneFetching] = useState(false);

    let onInitialRender = true;

    // ------------------------------------------------------
    // ### CALCULATE CURRENT WEEK ###
    useEffect(() => {
        if (onInitialRender) {
            onInitialRender = false;
            let week = seatingHandler.getWeek(new Date());
            let currentMonday = seatingHandler.getDateOfISOWeek(
                week,
                new Date().getFullYear()
            );
            setCurrentWeekMonday(currentMonday);
            setEarliestWeek(week);
            setWeek(week);
        }
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
            seatingHandler.fetchBookings(week).then(() => {
                console.log("FETCH DONE");
                seatingHandler.filterCurrentWeekBookings(week);
                setDoneFetching(true);
            });
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

    useEffect(() => {
        if (doneFetching) {
            console.log("USE EFFECT, DONE FETCH");
            console.table(seatingHandler.week);
        }
    }, [doneFetching]);

    function logWeek() {
        console.table(seatingHandler.week);
    }
    // ------------------------------------------------------
    // ### CALCULATION ###

    function onSeatingClick() {}

    function updateMondayOfCurrentWeek() {
        let mondayOfCurrentWeek: Date = seatingHandler.getDateOfISOWeek(
            week,
            new Date().getFullYear()
        );
        setCurrentWeekMonday(mondayOfCurrentWeek);
    }

    function createDay(
        nameOfDay: string,
        currentWeekMonday: Date,
        index: number
    ) {
        // ### CALCULATE IF BUTTON SHOULD BE SELECTABLE ###
        let day = NUMBER_TO_DAY[currentWeekMonday.getDay()];
        let dayBookings = seatingHandler.week[day as keyof ISeatings];

        // console.log(
        //     "DAY:\t",
        //     nameOfDay,
        //     dayBookings,
        //     "\nNEEDED TABELS: ",
        //     Math.ceil(props.currentBooking.guestCount / TABLE_CAPACITY)
        // );
        // CHECK IF FIRST SEATING IS AVALIBLE
        let showFirstSeating = calculateAvalibility(dayBookings.firstSeating);
        // CHECK IF LAST SEATING IS AVALIBLE
        let showLastSeating = calculateAvalibility(dayBookings.lastSeating);

        // ### CREATE DATE STRING ###
        const timeString = currentWeekMonday.toLocaleDateString();
        const isoString = currentWeekMonday.toISOString();
        // ### INCREASE DATE BY ONE DAY ###
        currentWeekMonday.setDate(currentWeekMonday.getDate() + 1);
        let html = (
            <Div
                width="80%"
                widthLaptop="calc(90% / 7)"
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
                        fontSize="18pt"
                        fontSizeLaptop="16pt"
                    >
                        {nameOfDay}
                    </Span>
                    {/* DAY AND MONTH */}
                    <Span
                        color="#FFFFFF"
                        shadow="2px 4px 4px hsla(0, 0%, 0%, 0.80)"
                        fontSize="18pt"
                        fontSizeLaptop="10pt"
                    >
                        {timeString}
                    </Span>
                </Div>
                {/* SEATINGS BUTTONS */}
                <Div
                    flexDirection="row"
                    flexDirectionLaptop="column"
                    justifyContent="space-between"
                    alignItems="stretch"
                    padding="15px 0 0 0"
                    gap="10px"
                >
                    {/* FIRST SEATING */}
                    <Button
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
                            {showFirstSeating ? "18:00-21:00" : "Fullbokat"}{" "}
                        </Span>
                    </Button>
                    {/* LAST SEATING */}
                    <Button
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
                            {showLastSeating ? "21:00-00:00" : "Fullbokat"}{" "}
                        </Span>
                    </Button>
                </Div>
            </Div>
        );

        return html;
    }

    const TABLE_CAPACITY = 6;
    const AVALIBLE_TABLES = 15;
    const MAX_GUEST_COUNT = TABLE_CAPACITY * AVALIBLE_TABLES;
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

        if (neededTables + newTablesRequired > TABLE_CAPACITY) return false;
        if (totalGuests + guestsToAdd > MAX_GUEST_COUNT) return false;

        return true;
    }

    let startOfSelectedWeek = new Date(currentWeekMonday);
    return (
        <Form minHeight="50vh">
            {doneFetching ? (
                <Div>
                    <Div
                        flexDirectionLaptop="row"
                        width="80%"
                        widthLaptop="90%"
                        justifyContentLaptop="space-between"
                    >
                        <Div
                            flexDirection="row"
                            padding="120px 0 0 0"
                            paddingLaptop="0 0 0 0"
                            widthTablet="60%"
                            widthLaptop="100%"
                        >
                            <Div>
                                <Button
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
                            </Div>
                            <Div justifyContent="center">
                                <Span fontSize="16pt">Vecka {week}</Span>
                            </Div>
                            <Div>
                                <Button
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
                        </Div>
                        <Div
                            padding="60px 0 0 0"
                            paddingLaptop="0 30px 0 0"
                            alignItemsLaptop="flex-end"
                        >
                            <Button
                                type="button"
                                background="#A3A380"
                                padding="8px 14px"
                                onClick={logWeek}
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

                    <Div flexDirectionLaptop="row" justifyContent="center">
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

                    <Div padding="60px 0 0 0">
                        <Div>
                            <Span fontSize="14pt" fontWeight="bold">
                                Du har valt :
                            </Span>
                        </Div>
                        <Div
                            padding="20px 0 0 0"
                            paddingLaptop="0px"
                            flexDirectionLaptop="row"
                            justifyContent="center"
                            alignItems="center"
                            gapLaptop="20px"
                        >
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
                    <Div
                        flexDirection="row"
                        padding="40px 0 40px 0"
                        widthLaptop="90%"
                    >
                        <Div justifyContentLaptop="flex-start">
                            <Button
                                type="button"
                                padding="15px 35px"
                                paddingTablet="12px 38px"
                                background="#A3A380"
                                onClick={props.moveBackward}
                            >
                                <Image
                                    src="/svg/left-arrow.svg"
                                    alt="left-arrow"
                                    height="30px"
                                    width="40px"
                                ></Image>
                            </Button>
                        </Div>
                        <Div justifyContentLaptop="flex-end">
                            <Button
                                type="button"
                                padding="15px 24px"
                                paddingTablet="9px 27px"
                                background="#A3A380"
                                onClick={props.moveForward}
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
                </Div>
            ) : (
                <Div justifyContent="center">
                    <Div className="spinner"></Div>
                </Div>
            )}
        </Form>
    );
};
