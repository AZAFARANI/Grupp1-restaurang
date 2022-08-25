import "../../scss/Booking.scss";
import { Button } from "../Styled/CustomButton";
import { StyledForm } from "../Styled/CustomForm";
import { StyledImage } from "../Styled/CustomImage";
import { CustomSpan } from "../Styled/CustomSpan";
import {
  ContainerDiv,
  CustomSpanDiv,
  HeaderDiv,
  HeroDiv,
  SeperatorLine,
} from "../Styled/GlassmorphDiv";
import { InputText } from "../Styled/StyledInputTypeText";

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
          <StyledForm>
            <CustomSpanDiv
              applyToNthChild="odd"
              applyToNthChildTable="even"
              flexDirectionTablet="column"
              flexDirectionDesktop="row"
              widthDesktop="80%"
            >
              <CustomSpanDiv flexDirectionTablet="column">
                <CustomSpan
                  fontSize="24px"
                  fontSizeTablet="22px"
                  fontSizeDesktop="20px"
                >
                  Din epost
                </CustomSpan>
                <InputText width="90%" height="50px" corner="10px"></InputText>
              </CustomSpanDiv>
              <CustomSpanDiv flexDirectionTablet="column" marginBottom="35px">
                <CustomSpan
                  fontSize="24px"
                  fontSizeTablet="22px"
                  fontSizeDesktop="20px"
                >
                  Mobilnummer
                </CustomSpan>
                <InputText width="90%" height="50px" corner="10px"></InputText>
              </CustomSpanDiv>
            </CustomSpanDiv>
            <CustomSpanDiv
              applyToNthChild="odd"
              applyToNthChildTable="even"
              flexDirectionDesktop="row"
              widthDesktop="80%"
              marginBottom="35px"
            >
              <CustomSpanDiv flexDirectionTablet="column" widthTablet="300px">
                <CustomSpan
                  fontSize="24px"
                  fontSizeTablet="22px"
                  fontSizeDesktop="20px"
                >
                  Förnamn
                </CustomSpan>
                <InputText
                  width="90%"
                  height="50px"
                  corner="10px"
                  widthTablet="95%"
                ></InputText>
              </CustomSpanDiv>
              <CustomSpanDiv flexDirectionTablet="column" widthTablet="300px">
                <CustomSpan
                  fontSize="24px"
                  fontSizeTablet="22px"
                  fontSizeDesktop="20px"
                >
                  Efternamn
                </CustomSpan>
                <InputText
                  width="90%"
                  height="50px"
                  corner="10px"
                  widthTablet="95%"
                ></InputText>
              </CustomSpanDiv>
            </CustomSpanDiv>
            <CustomSpanDiv
              applyToNthChild="even"
              flexDirectionTablet="column"
              widthDesktop="80%"
            >
              <CustomSpan
                fontSize="24px"
                fontSizeTablet="22px"
                fontSizeDesktop="20px"
              >
                Har ni några allergier?
              </CustomSpan>
              <InputText
                width="90%"
                height="200px"
                corner="10px"
                widthDesktop="95%"
              ></InputText>
              <Button padding="20px 70px" background="#A3A380">
                <CustomSpan
                  color="white"
                  fontSize="40px"
                  fontSizeTablet="30px"
                  fontSizeDesktop="20px"
                >
                  Nästa
                </CustomSpan>
              </Button>
            </CustomSpanDiv>
          </StyledForm>
        </ContainerDiv>
      </HeroDiv>
    </>
  );
};
