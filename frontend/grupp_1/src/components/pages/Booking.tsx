import { useState } from "react";
import "../../scss/Booking.scss";
import { PersonalData } from "../forms/PersonalData";
import { PersonCounter } from "../forms/PersonCounter";
import { StyledImage } from "../Styled/CustomImage";
import { CustomSpan } from "../Styled/CustomSpan";
import {
  ContainerDiv,
  HeaderDiv,
  HeroDiv,
  SeperatorLine,
} from "../Styled/GlassmorphDiv";

export const Booking = () => {
  const [step, setStep] = useState(1);

  function handleStep(step: number) {
    setStep(step);
    console.log(step);
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
          {(() => {
            if (step === 1) {
              return (
                <PersonalData
                  setStep={handleStep}
                  bookingStep={step}
                ></PersonalData>
              );
            } else if (step === 2) {
              return (
                <PersonCounter
                  setStep={handleStep}
                  bookingStep={step}
                ></PersonCounter>
              );
            }
          })()}
        </ContainerDiv>
      </HeroDiv>
    </>
  );
};
