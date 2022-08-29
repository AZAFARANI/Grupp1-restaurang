import { useState } from "react";
import "../../scss/Booking.scss";
import { DateData } from "../forms/DateData";
import { PersonalData } from "../forms/PersonalData";
import { PersonCounter } from "../forms/PersonCounter";
import { StyledImage } from "../Styled/CustomImage";
import { CustomSpan } from "../Styled/CustomSpan";
import {
  ContainerDiv,
  FormStepDiv,
  HeaderDiv,
  HeroDiv,
  SeperatorLine,
} from "../Styled/GlassmorphDiv";

export const Booking = () => {
  const [step, setStep] = useState(1);
  // let newBooking = new Booking();

  function handleStep(step: number) {
    setStep(step);
  }

  return (
    <>
      <HeroDiv backgroundImage="url(images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)">
        <HeaderDiv
          display="flex"
          flexDirection="row"
          height="120px"
          width="90%"
          justifyContent="left"
          background="none"
          backgroundDesktop="rgba(0, 0, 0, 0.50)"
          widthDesktop="70%"
          heightDekstop="143px"
        >
          <CustomSpan
            fontSize="70px"
            fontType="Montez"
            color="white"
            displayDesktop="none"
            fontSizeTablet="60px"
          >
            Boka
          </CustomSpan>
          <StyledImage src="/svg/Logo.svg" alt="logotype"></StyledImage>
        </HeaderDiv>
        <HeaderDiv
          height="100px"
          justifyContent="space-between"
          widthDesktop="70%"
          heightDekstop="120px"
        >
          <CustomSpan
            fontSize="40px"
            fontType="Sofia"
            shadow="none"
            fontSizeTablet="40px"
            fontSizeDesktop="40px"
          >
            Låt oss boka!
          </CustomSpan>
          <SeperatorLine></SeperatorLine>
        </HeaderDiv>
        <ContainerDiv flexDirection="column" widthDesktop="70%">
          <FormStepDiv className={`${step === 3 ? "visible" : "hidden"}`}>
            <PersonalData
              setStep={handleStep}
              bookingStep={step}
            ></PersonalData>
          </FormStepDiv>
          <FormStepDiv className={`${step === 2 ? "visible" : "hidden"}`}>
            <PersonCounter
              setStep={handleStep}
              bookingStep={step}
            ></PersonCounter>
          </FormStepDiv>
          <FormStepDiv className={`${step === 1 ? "visible" : "hidden"}`}>
            <DateData></DateData>
          </FormStepDiv>
        </ContainerDiv>
      </HeroDiv>
    </>
  );
};
