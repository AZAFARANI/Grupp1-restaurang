import { useState } from "react";
import "../../scss/Booking.scss";
import { Button } from "../Styled/CustomButton";
import { StyledForm } from "../Styled/CustomForm";
import { StyledSVG } from "../Styled/CustomImage";
import { CustomSpan } from "../Styled/CustomSpan";
import {
  ButtonContainerDiv,
  ContainerDiv,
  HeroDiv,
  SeperatorLine,
  TextContainerDiv,
} from "../Styled/GlassmorphDiv";

interface IPersonCounterProps {
  setStep(step: number): void;
  bookingStep: number;
}

export const PersonCounter = (props: IPersonCounterProps) => {
  const [Quantify, setQuantify] = useState(0);

  function reduceQuantify() {
    if (Quantify >= 1) {
      setQuantify(Quantify - 1);
    }
  }

  function increaseQuantify() {
    setQuantify(Quantify + 1);
  }

  function handleForwardStep() {
    if (props.bookingStep === 2) {
      props.setStep(props.bookingStep + 1);
    }
  }

  function handleBackStep() {
    if (props.bookingStep === 2) {
      props.setStep(props.bookingStep - 1);
    }
  }

  return (
    <>
      <StyledForm height="450px" heightTablet="500px" heightDesktop="550px">
        <HeroDiv>
          <ContainerDiv
            background="none"
            flexDirection="row"
            paddingTopDesktop="120px"
            widthTablet="50%"
            widthDesktop="45%"
          >
            <ButtonContainerDiv>
              <Button
                type="button"
                onClick={reduceQuantify}
                padding="10px 15px"
                paddingTablet="8px 14px"
                paddingDesktop="8px 14px"
                background="#A3A380"
              >
                <StyledSVG src="/svg/Reduce.svg" alt="Reduce svg"></StyledSVG>
              </Button>
            </ButtonContainerDiv>
            <TextContainerDiv>
              <CustomSpan
                fontSize="20pt"
                fontSizeTablet="26pt"
                fontSizeDesktop="24pt"
              >
                {Quantify} st
              </CustomSpan>
            </TextContainerDiv>
            <ButtonContainerDiv>
              <Button
                type="button"
                onClick={increaseQuantify}
                padding="10px 15px"
                paddingTablet="8px 14px"
                paddingDesktop="8px 14px"
                background="#A3A380"
              >
                <StyledSVG src="/svg/Add.svg"></StyledSVG>
              </Button>
            </ButtonContainerDiv>
          </ContainerDiv>
          <ContainerDiv
            background="none"
            paddingTop="100px"
            paddingTopTablet="200px"
            paddingTopDesktop="180px"
          >
            <SeperatorLine></SeperatorLine>
          </ContainerDiv>
          <ContainerDiv
            background="none"
            flexDirection="row"
            paddingTopTablet="40px"
            widthDesktop="90%"
            paddingTopDesktop="60px"
          >
            <ButtonContainerDiv justifyContentDesktop="flex-start">
              <Button
                type="button"
                padding="15px 35px"
                paddingTablet="20px 45px"
                background="#A3A380"
                onClick={handleBackStep}
              >
                <StyledSVG
                  src="/svg/left-arrow.svg"
                  alt="left-arrow"
                  height="30px"
                  width="40px"
                ></StyledSVG>
              </Button>
            </ButtonContainerDiv>
            <ButtonContainerDiv justifyContentDesktop="flex-end">
              <Button
                type="button"
                padding="15px 24px"
                paddingTablet="19px 32px"
                paddingDesktop="9px 27px"
                background="#A3A380"
                onClick={handleForwardStep}
              >
                <CustomSpan
                  color="white"
                  fontSize="17pt"
                  fontSizeTablet="18pt"
                  fontSizeDesktop="16spt"
                >
                  Nästa
                </CustomSpan>
              </Button>
            </ButtonContainerDiv>
          </ContainerDiv>
        </HeroDiv>
      </StyledForm>
    </>
  );
};
