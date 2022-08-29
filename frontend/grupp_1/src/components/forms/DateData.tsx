import { useEffect, useState } from "react";
import "../../scss/Booking.scss";
import { Button } from "../Styled/CustomButton";
import { StyledForm } from "../Styled/CustomForm";
import { StyledSVG } from "../Styled/CustomImage";
import { CustomSpan } from "../Styled/CustomSpan";
import {
  ButtonContainerDiv,
  ContainerDiv,
  HeroDiv,
  TextContainerDiv,
} from "../Styled/GlassmorphDiv";

export const DateData = () => {
  const [date, setDate] = useState(0);
  const [currentDate, setCurrentDate] = useState<Date>();

  useEffect(() => {
    handleDate();
  }, []);

  function handleDate() {
    let currentDate = new Date();
    var oneJan = new Date(currentDate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentDate.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);
    setDate(result);
    setCurrentDate(currentDate);
  }

  return (
    <>
      <StyledForm>
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
                padding="8px 14px"
                paddingTablet="8px 14px"
                paddingDesktop="8px 14px"
                background="#A3A380"
              >
                <StyledSVG
                  src="/svg/left-arrow-form.svg"
                  alt="left-arrow"
                  width="40px"
                  height="30px"
                ></StyledSVG>
              </Button>
            </ButtonContainerDiv>
            <TextContainerDiv>
              <CustomSpan
                fontSize="20pt"
                fontSizeTablet="26pt"
                fontSizeDesktop="24pt"
              >
                {date}
              </CustomSpan>
            </TextContainerDiv>
            <ButtonContainerDiv>
              <Button
                type="button"
                padding="8px 14px"
                paddingTablet="8px 14px"
                paddingDesktop="8px 14px"
                background="#A3A380"
              >
                <StyledSVG
                  src="/svg/right-arrow.svg"
                  alt="right-arrow"
                  width="40px"
                  height="30px"
                ></StyledSVG>
              </Button>
            </ButtonContainerDiv>
          </ContainerDiv>
        </HeroDiv>
      </StyledForm>
    </>
  );
};
