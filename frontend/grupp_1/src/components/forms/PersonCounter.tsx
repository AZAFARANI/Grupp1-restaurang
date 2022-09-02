import { FormEvent, useRef, useState } from "react";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import "../../scss/Booking.scss";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { Input } from "../Styled/Input";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

interface IPersonCounterProps {
  moveForward(): void;
  moveBackward(): void;
  handleNewBooking(changes: INewBookingOptional): void;
}

export const PersonCounter = (props: IPersonCounterProps) => {
  const [guestCount, setGuestCount] = useState(1);

  const formRef = useRef<HTMLFormElement>(null);

  const LOWER_LIMIT = 1;
  const UPPER_LIMIT = 90;

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    props.handleNewBooking({ guestCount: guestCount });
    props.moveForward();
  }

  function reduceQuantity() {
    if (guestCount > LOWER_LIMIT) setGuestCount(guestCount - 1);
  }

  function increaseQuantity() {
    if (guestCount < UPPER_LIMIT) setGuestCount(guestCount + 1);
  }

  return (
    <Form height="auto" ref={formRef}>
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
          <Div justifyContent="center">
            <Button
              type="button"
              onClick={reduceQuantity}
              padding="10px 15px"
              paddingTablet="6px 8px"
              background="#A3A380"
            >
              <Image
                src="/svg/Reduce.svg"
                alt="Reduce svg"
                width="30px"
                height="30px"
              ></Image>
            </Button>
          </Div>
          {/* TEXT CONTAINER DIV */}
          <Div justifyContent="center">
            <Input
              borderRadius="0"
              backgroundColor="rgba(0,0,0,0)"
              textAlign="center"
              boxShadow="none"
              type="text"
              fontSize="20pt"
              fontSizeTablet="26pt"
              fontSizeLaptop="24pt"
              value={guestCount + " st"}
              disabled
              padding="5px"
            ></Input>
          </Div>
          <Div justifyContent="center">
            <Button
              type="button"
              onClick={increaseQuantity}
              padding="10px 15px"
              paddingTablet="6px 8px"
              background="#A3A380"
            >
              <Image width="30px" height="30px" src="/svg/Add.svg"></Image>
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
        <Div flexDirection="row" padding="40px 0 40px 0" widthLaptop="90%">
          <Div justifyContentLaptop="flex-start">
            <Button
              type="button"
              padding="15px 35px"
              paddingTablet="12px 38px"
              background="#A3A380"
              onClick={props.moveBackward}
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
              onClick={submitHandler}
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
