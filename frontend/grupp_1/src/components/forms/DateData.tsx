import { useEffect, useState } from "react";
import IBookingMinimized from "../../interfaces/IBookingMinimized";
import INewBooking from "../../interfaces/INewBooking";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import BookingModel from "../../models/Booking";
import "../../scss/Booking.scss";
import TramontoService from "../../services/Tramonto";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { Span } from "../Styled/Span";

const service = new TramontoService();

interface IDateDataProps {
  moveForward(): void;
  moveBackward(): void;
  handleNewBooking(changes: INewBookingOptional): void;
  currentBooking: INewBooking;
}

export const DateData = (props: IDateDataProps) => {
  const [week, setWeek] = useState(0);

  let shouldFetchBookings = true;
  const [bookings, setBookings] = useState<BookingModel[]>([]);
  const [earliestWeek, setEarliestWeek] = useState(-1);

  const TABLE_CAPACITY = 6;
  const AVALIBLE_TABLES = 15;

  const SEATINGS = {
    sunday: {
      firstSeating: [],
      lastSeating: [],
    },
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
  };

  // ------------------------------------------------------
  // ### CALCULATE CURRENT WEEK ###
  useEffect(() => {
    getWeek(new Date());
  }, []);
  function getWeek(date: Date) {
    let oneJan = new Date(date.getFullYear(), 0, 1);
    let numberOfDays = Math.floor(
      (date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
    );
    let result = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
    setEarliestWeek(result);
    setWeek(result);
  }
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
    if (shouldFetchBookings) fetchBookings();
  }, [shouldFetchBookings]);

  function fetchBookings() {
    shouldFetchBookings = false;
    // service.getBookings().then((foundBookings: IBookingMinimized[]) => {
    //   setBookings(foundBookings);
    // });
  }
  // ------------------------------------------------------
  // ### CALCULATION ###
  useEffect(() => {
    console.log(bookings);
    calculateAvalibleTimes();
  }, [bookings]);

  function calculateAvalibleTimes() {
    const neededTables = Math.ceil(
      props.currentBooking.guestCount / TABLE_CAPACITY
    );
  }

  return (
    <Form>
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
            <Button type="button" background="#A3A380" padding="8px 14px">
              <Image
                src="/svg/Refresh-date.svg"
                alt="Refresh Weeks"
                width="30px"
                height="30px"
              ></Image>
            </Button>
          </Div>
        </Div>
        <Div flexDirectionLaptop="row">
          <Div widthLaptop="20%">
            <Div
              flexDirection="row"
              flexDirectionLaptop="column"
              justifyContent="space-between"
              width="80%"
              padding="20px 0 0 0"
            >
              {/* MÅNDAG */}
              <Span
                color="#FFFFFF"
                shadow="2px 4px 4px hsla(0, 0%, 0%, 0.80)"
                fontSizeLaptop="18pt"
              >
                Måndag
              </Span>
              <Span
                color="#FFFFFF"
                shadow="2px 4px 4px hsla(0, 0%, 0%, 0.80)"
                fontSizeLaptop="12pt"
              >
                29 augusti
              </Span>
            </Div>
            <Div
              flexDirection="row"
              flexDirectionLaptop="column"
              justifyContent="space-between"
              padding="15px 0 0 0"
              gap="20px"
              width="80%"
            >
              <Button
                type="button"
                border="1px solid white"
                borderRadius="none"
                padding="20px 12px"
                paddingTablet="20px 70px"
                paddingLaptop="12px 50px"
                background="#D9D9D9"
              >
                <Span color="#000000">18:00-21:00</Span>
              </Button>
              <Button
                type="button"
                border="1px solid white"
                borderRadius="none"
                padding="20px 12px"
                paddingTablet="20px 70px"
                paddingLaptop="12px 50px"
                background="#D9D9D9"
              >
                <Span color="#000000">21:00-00:00</Span>
              </Button>
            </Div>
          </Div>
        </Div>
        <Div padding="60px 0 0 0">
          <Div padding="0 0 20px 0">
            <Span fontSize="14pt" fontWeight="bold">
              Du har valt :
            </Span>
          </Div>
          <Div padding="0 0 10px 0">
            <Span fontSize="20pt" color="#686868">
              Onsdag 21:a Augusti
            </Span>
          </Div>
          <Div>
            <Span fontSize="18pt" color="#686868">
              18:00 - 21:00
            </Span>
          </Div>
        </Div>
        <Div flexDirection="row" padding="40px 0 40px 0" widthLaptop="90%">
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
              <Span color="white" fontSize="17pt" fontSizeTablet="18pt">
                Nästa
              </Span>
            </Button>
          </Div>
        </Div>
      </Div>
    </Form>
  );
};
