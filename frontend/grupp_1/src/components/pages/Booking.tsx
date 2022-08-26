import "../../scss/Booking.scss";
import { PersonalData } from "../forms/PersonalData";
import { StyledImage } from "../Styled/CustomImage";
import { CustomSpan } from "../Styled/CustomSpan";
import {
  ContainerDiv,
  HeaderDiv,
  HeroDiv,
  SeperatorLine,
} from "../Styled/GlassmorphDiv";

export const Booking = () => {
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
          <PersonalData></PersonalData>
        </ContainerDiv>
      </HeroDiv>
    </>
  );
};
