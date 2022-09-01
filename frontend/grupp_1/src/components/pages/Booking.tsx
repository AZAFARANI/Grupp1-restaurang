import { useEffect, useRef, useState } from "react";
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
  const [shouldSwitch, setShouldSwitch] = useState<boolean>(false);
  const [compareButtons, setCompareButtons] = useState<boolean>(true);

  const mainRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   mainRef.current?.clientHeight;
  // }, [step]);

  let shouldFetch = true;
  // let newBooking = new Booking();

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
        <Div
          transition="height 1s ease"
          overflowX="hidden"
          backgroundColor="rgba(255, 255, 255, 0.75)"
          ref={mainRef}
        >
          {/* LÅT OSS BOKA */}
          <Div
            className={`${step === 1 ? "visible" : "hidden"} ${
              shouldSwitch ? "fadeOut" : ""
            }`}
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
            className={`${step === 2 ? "visible" : "hidden"} ${
              shouldSwitch ? "fadeOut" : ""
            }`}
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
            className={`${step === 3 ? "visible" : "hidden"} ${
              shouldSwitch ? "fadeOut" : ""
            }`}
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
            className={`${step === 4 ? "visible" : "hidden"} ${
              shouldSwitch ? "fadeOut" : ""
            }`}
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
            className={`${step === 5 ? "visible" : "hidden"} ${
              shouldSwitch ? "fadeOut" : ""
            }`}
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
              onAnimationEnd={() => {
                if (shouldSwitch) {
                  setStep(2);
                  setTitle("Hur många är ni?");
                  setShouldSwitch(false);
                }
              }}
              className={`${step === 1 ? "visible" : "hidden"} ${
                shouldSwitch ? "fadeOut" : ""
              }`}
            >
              <PersonalData
                moveForward={() => {
                  setShouldSwitch(true);
                }}
              ></PersonalData>
            </Div>
            {/* STEP 2 */}
            <Div
              onAnimationEnd={() => {
                if (shouldSwitch) {
                  if (compareButtons) setStep(3);
                  setTitle("När vill ni äta?");
                  setShouldSwitch(false);
                }
                if (!compareButtons) {
                  setStep(1);
                  setTitle("Låt oss boka!");
                  setShouldSwitch(false);
                  setCompareButtons(true);
                }
              }}
              className={`${step === 2 ? "visible" : "hidden"} ${
                shouldSwitch ? "fadeOut" : ""
              } `}
            >
              <PersonCounter
                moveForward={() => {
                  setShouldSwitch(true);
                }}
                moveBackward={() => {
                  setShouldSwitch(true);
                  setCompareButtons(false);
                }}
              ></PersonCounter>
            </Div>
            {/* STEP 3 */}
            <Div
              onAnimationEnd={() => {
                if (shouldSwitch) {
                  if (compareButtons) setStep(4);
                  setTitle("Ser allt bra ut?");
                  setShouldSwitch(false);
                }
                if (!compareButtons) {
                  setStep(2);
                  setTitle("Hur många är ni?");
                  setShouldSwitch(false);
                  setCompareButtons(true);
                }
              }}
              className={`${step === 3 ? "visible" : "hidden"} ${
                shouldSwitch ? "fadeOut" : ""
              }`}
            >
              <DateData
                moveForward={() => {
                  setShouldSwitch(true);
                }}
                moveBackward={() => {
                  setShouldSwitch(true);
                  setCompareButtons(false);
                }}
              ></DateData>
            </Div>
            {/* STEP 4 */}
            <Div
              onAnimationEnd={() => {
                if (shouldSwitch) {
                  if (compareButtons) setStep(5);
                  setTitle("Klar!");
                  setShouldSwitch(false);
                }
                if (!compareButtons) {
                  setStep(3);
                  setTitle("När vill ni äta?");
                  setShouldSwitch(false);
                  setCompareButtons(true);
                }
              }}
              className={`${step === 4 ? "visible" : "hidden"} ${
                shouldSwitch ? "fadeOut" : ""
              }`}
            >
              <ConfirmData
                moveForward={() => {
                  setShouldSwitch(true);
                }}
                moveBackward={() => {
                  setShouldSwitch(true);
                  setCompareButtons(false);
                }}
              ></ConfirmData>
            </Div>
            {/* STEP 5 */}
            <Div className={`${step === 5 ? "visible" : "hidden"}`}>
              <FinishData setStep={setStep} bookingStep={step}></FinishData>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
