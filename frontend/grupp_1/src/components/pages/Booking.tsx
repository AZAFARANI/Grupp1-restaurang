import { useEffect, useState } from "react";
import BookingModel from "../../models/Booking";
import "../../scss/Booking.scss";
import TramontoService from "../../services/Tramonto";
import { ConfirmData } from "../forms/ConfirmData";
import { DateData } from "../forms/DateData";
import { FinishData } from "../forms/FinishData";
import { PersonalData } from "../forms/PersonalData";
import { PersonCounter } from "../forms/PersonCounter";
import { Div } from "../Styled/Div";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

export const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookings, setBookings] = useState<BookingModel[]>([]);
  const [title, setTitle] = useState<string>("Låt oss boka!");

  let shouldFetch = true;
  // let newBooking = new Booking();

  function handleStep(step: number) {
    setStep(step);
  }

  function handleTitle(title: string) {
    setTitle(title);
  }

  function fetchBookings() {
    shouldFetch = false;
    const service = new TramontoService();
    // service.getBookings().then((bookings: BookingModel[]) => {
    //     setBookings(bookings);
    //     console.log(bookings);
    // });
    console.log("STARTED FETCH");
    // service.addBooking().then((result) => {
    //     if (result?.error) console.log("ERROR", result.error);
    //     else console.log("FETCHED");
    // });
  }

  useEffect(() => {
    if (shouldFetch) fetchBookings();
  }, []);

  return (
    <Div backgroundImage="url(images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)">
      <Div widthLaptop="70%">
        {/* HEADER */}
        <Div
          display="flex"
          flexDirection="row"
          height="120px"
          width="100%"
          justifyContent="left"
          backgroundColorLaptop="rgba(0, 0, 0, 0.50)"
          heightLaptop="143px"
        >
          <Span
            fontSize="70px"
            fontType="Montez"
            color="white"
            displayLaptop="none"
            fontSizeTablet="60px"
          >
            Boka
          </Span>
          <Image
            src="/svg/Logo.svg"
            alt="logotype"
            display="none"
            displayTablet="none"
          ></Image>
        </Div>
        {/* MAIN */}
        <Div overflow="hidden" backgroundColor="rgba(255, 255, 255, 0.75)">
          {/* LÅT OSS BOKA */}
          <Div
            className={`${step === 1 ? "visible" : "hidden"}`}
            padding="10px"
            height="auto"
          >
            <Span
              fontSize="40px"
              shadow="none"
              fontSizeTablet="40px"
              fontSizeLaptop="40px"
              padding="10px"
            >
              {title}
            </Span>
            <SeperatorLine></SeperatorLine>
          </Div>
          <Div
            className={`${step === 2 ? "visible" : "hidden"}`}
            padding="10px"
            height="auto"
          >
            <Span
              fontSize="40px"
              shadow="none"
              fontSizeTablet="40px"
              fontSizeLaptop="40px"
              padding="10px"
            >
              {title}
            </Span>
            <SeperatorLine></SeperatorLine>
          </Div>
          <Div
            className={`${step === 3 ? "visible" : "hidden"}`}
            padding="10px"
            height="auto"
          >
            <Span
              fontSize="40px"
              shadow="none"
              fontSizeTablet="40px"
              fontSizeLaptop="40px"
              padding="10px"
            >
              {title}
            </Span>
            <SeperatorLine></SeperatorLine>
          </Div>
          <Div
            className={`${step === 4 ? "visible" : "hidden"}`}
            padding="10px"
            height="auto"
          >
            <Span
              fontSize="40px"
              shadow="none"
              fontSizeTablet="40px"
              fontSizeLaptop="40px"
              padding="10px"
            >
              {title}
            </Span>
            <SeperatorLine></SeperatorLine>
          </Div>
          <Div
            className={`${step === 5 ? "visible" : "hidden"}`}
            padding="10px"
            height="auto"
          >
            <Span
              fontSize="40px"
              shadow="none"
              fontSizeTablet="40px"
              fontSizeLaptop="40px"
              padding="10px"
            >
              {title}
            </Span>
            <SeperatorLine></SeperatorLine>
          </Div>
          {/* FORM STEPS */}
          <Div>
            {/* STEP 1 */}
            <Div
              animation="fade 250ms 125ms ease-in-out forwards"
              className={`${step === 1 ? "visible" : "hidden"}`}
            >
              <PersonalData
                setStep={handleStep}
                bookingStep={step}
                setTitle={handleTitle}
              ></PersonalData>
            </Div>
            {/* STEP 2 */}
            <Div
              animation="fade 250ms 125ms ease-in-out forwards"
              className={`${step === 2 ? "visible" : "hidden"}`}
            >
              <PersonCounter
                setStep={handleStep}
                bookingStep={step}
                setTitle={handleTitle}
              ></PersonCounter>
            </Div>
            {/* STEP 3 */}
            <Div
              animation="fade 250ms 125ms ease-in-out forwards"
              className={`${step === 3 ? "visible" : "hidden"}`}
            >
              <DateData
                setStep={handleStep}
                bookingStep={step}
                setTitle={handleTitle}
              ></DateData>
            </Div>
            {/* STEP 4 */}
            <Div
              animation="fade 250ms 125ms ease-in-out forwards"
              className={`${step === 4 ? "visible" : "hidden"}`}
            >
              <ConfirmData
                setStep={handleStep}
                bookingStep={step}
                setTitle={handleTitle}
              ></ConfirmData>
            </Div>
            {/* STEP 5 */}
            <Div
              animation="fade 250ms 125ms ease-in-out forwards"
              className={`${step === 5 ? "visible" : "hidden"}`}
            >
              <FinishData setStep={handleStep} bookingStep={step}></FinishData>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
