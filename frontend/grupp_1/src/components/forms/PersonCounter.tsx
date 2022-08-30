import { useState } from "react";
import "../../scss/Booking.scss";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

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
    <Form height="auto">
      {/* HERO DIV */}
      <Div>
        {/* CONTAINER DIV */}
        <Div
          flexDirection="row"
          paddingLaptop="120px 0 0 0"
          widthTablet="50%"
          widthLaptop="45%"
        >
          {/* BUTTON CONTAINER DIV */}
          <Div>
            <Button
              type="button"
              onClick={reduceQuantify}
              padding="10px 15px"
              paddingTablet="8px 14px"
              background="#A3A380"
            >
              <Image
                src="/svg/Reduce.svg"
                alt="Reduce svg"
                width="40px"
                height="40px"
              ></Image>
            </Button>
          </Div>
          {/* TEXT CONTAINER DIV */}
          <Div justifyContent="center">
            <Span fontSize="20pt" fontSizeTablet="26pt" fontSizeLaptop="24pt">
              {Quantify} st
            </Span>
          </Div>
          <Div>
            <Button
              type="button"
              onClick={increaseQuantify}
              padding="10px 15px"
              paddingTablet="8px 14px"
              background="#A3A380"
            >
              <Image width="40px" height="40px" src="/svg/Add.svg"></Image>
            </Button>
          </Div>
        </Div>
        {/* CONTAINER DIV */}
        <Div
          padding="100px 0 0 0"
          paddingTablet="200px 0 0 0"
          paddingLaptop="180px 0 0 0"
        >
          <SeperatorLine></SeperatorLine>
        </Div>
        {/* CONTAINER DIV */}
        <Div flexDirection="row" padding="40px 0 0 0" widthLaptop="90%">
          <Div justifyContentLaptop="flex-start">
            <Button
              type="button"
              padding="15px 35px"
              paddingTablet="12px 38px"
              background="#A3A380"
              onClick={handleBackStep}
            >
              <Image
                src="/svg/left-arrow.svg"
                alt="left-arrow"
                height="30px"
                width="40px"
              ></Image>
            </Button>
          </Div>
          <Div justifyContentLaptop="flex-end">
            <Button
              type="button"
              padding="15px 24px"
              paddingTablet="9px 27px"
              background="#A3A380"
              onClick={handleForwardStep}
            >
              <Span color="white" fontSize="17pt" fontSizeTablet="18pt">
                Nästa
              </Span>
            </Button>
          </Div>
        </Div>
      </Div>
    </Form>
  );
};
