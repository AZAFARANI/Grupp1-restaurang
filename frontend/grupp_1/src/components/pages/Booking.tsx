import "../../scss/Booking.scss";
import { Button } from "../Styled/CustomButton";
import { StyledForm } from "../Styled/CustomForm";
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
        >
          <CustomSpan fontSize="70px" fontType="Montez" color="white">
            Boka
          </CustomSpan>
        </HeaderDiv>
        <HeaderDiv height="100px" justifyContent="space-between">
          <CustomSpan fontSize="40px" fontType="Sofia" shadow="none">
            Låt oss boka!
          </CustomSpan>
          <SeperatorLine></SeperatorLine>
        </HeaderDiv>
        <ContainerDiv flexDirection="column" height="100%">
          <StyledForm applyToNthChild="even">
            <CustomSpanDiv applyToNthChild="even" flexDirectionTablet="column">
              <CustomSpan fontSize="24px">Din epost</CustomSpan>
              <InputText width="90%" height="50px" corner="10px"></InputText>
            </CustomSpanDiv>
            <CustomSpanDiv applyToNthChild="odd">
              <CustomSpanDiv flexDirectionTablet="column">
                <CustomSpan fontSize="24px">Förnamn</CustomSpan>
                <InputText width="90%" height="50px" corner="10px"></InputText>
              </CustomSpanDiv>
              <CustomSpanDiv flexDirectionTablet="column">
                <CustomSpan fontSize="24px">Efternamn</CustomSpan>
                <InputText width="90%" height="50px" corner="10px"></InputText>
              </CustomSpanDiv>
            </CustomSpanDiv>
            <CustomSpanDiv applyToNthChild="even" flexDirectionTablet="column">
              <CustomSpan fontSize="24px">Mobilnummer</CustomSpan>
              <InputText width="90%" height="50px" corner="10px"></InputText>
              <CustomSpan fontSize="24px">Har ni några allergier?</CustomSpan>
              <InputText width="90%" height="200px" corner="10px"></InputText>
              <Button padding="20px 70px" background="#A3A380">
                <CustomSpan color="white" fontSize="40px">
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
