import { useState } from "react";
import "../../scss/Booking.scss";
import { DateData } from "../forms/DateData";
import { PersonalData } from "../forms/PersonalData";
import { PersonCounter } from "../forms/PersonCounter";
import { Div } from "../Styled/Div";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

export const Booking = () => {
  const [step, setStep] = useState(1);
  // let newBooking = new Booking();

  function handleStep(step: number) {
    setStep(step);
  }

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
        <Div backgroundColor="rgba(255, 255, 255, 0.75)">
          {/* LÅT OSS BOKA */}
          <Div padding="10px" height="auto">
            <Span
              fontSize="40px"
              shadow="none"
              fontSizeTablet="40px"
              fontSizeLaptop="40px"
              padding="10px"
            >
              Låt oss boka!
            </Span>
            <SeperatorLine></SeperatorLine>
          </Div>
          {/* FORM STEPS */}
          <Div>
            {/* STEP 1 */}
            <Div className={`${step === 1 ? "visible" : "hidden"}`}>
              <PersonalData
                setStep={handleStep}
                bookingStep={step}
              ></PersonalData>
            </Div>
            {/* STEP 2 */}
            <Div className={`${step === 2 ? "visible" : "hidden"}`}>
              <PersonCounter
                setStep={handleStep}
                bookingStep={step}
              ></PersonCounter>
            </Div>
            {/* STEP 3 */}
            <Div className={`${step === 3 ? "visible" : "hidden"}`}>
              <DateData setStep={handleStep} bookingStep={step}></DateData>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
