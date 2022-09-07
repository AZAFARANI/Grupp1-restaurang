import { FormEvent, useRef, useState } from "react";
import INewBooking from "../../interfaces/INewBooking";
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
    currentBooking: INewBooking;
}

export const PersonCounter = (props: IPersonCounterProps) => {
    const [guestCount, setGuestCount] = useState(
        props.currentBooking.guestCount
    );

    const formRef = useRef<HTMLFormElement>(null);

    const LOWER_LIMIT = 1;
    const UPPER_LIMIT = 90;

    function submitHandler(e: FormEvent) {
        e.preventDefault();
        document.querySelector("#scrollToStartOfForm")?.scrollIntoView(true);
        props.handleNewBooking({ guestCount: guestCount });
    }

    function reduceQuantity() {
        if (guestCount > LOWER_LIMIT) setGuestCount(guestCount - 1);
    }

    function increaseQuantity() {
        if (guestCount < UPPER_LIMIT) setGuestCount(guestCount + 1);
    }

    return (
        <Form ref={formRef} justifyContent="space-between" id="form-2">
            {/* AMMOUNT DIV */}
            <Div
                flexDirection="row"
                widthTablet="50%"
                widthLaptop="45%"
                minHeight="50vh"
            >
                {/* BUTTON CONTAINER DIV */}
                <Button
                    id="form-2-reduce-button"
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
                {/* TEXT CONTAINER DIV */}
                <Input
                    id="form-2-quantity"
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
                />
                <Button
                    id="form-2-increase-button"
                    type="button"
                    onClick={increaseQuantity}
                    padding="10px 15px"
                    paddingTablet="6px 8px"
                    background="#A3A380"
                >
                    <Image
                        width="30px"
                        height="30px"
                        src="/svg/Add.svg"
                    ></Image>
                </Button>
            </Div>

            <SeperatorLine></SeperatorLine>
            {/* BUTTONS DIV */}
            <Div
                flexDirection="row"
                justifyContent="space-between"
                height="auto"
                padding="20px 0 0 0"
            >
                <Button
                    id="form-2-back-button"
                    type="button"
                    padding="15px 35px"
                    paddingTablet="12px 38px"
                    background="#A3A380"
                    onClick={(e) => {
                        submitHandler(e);
                        props.moveBackward();
                    }}
                >
                    <Image
                        src="/svg/left-arrow.svg"
                        alt="left-arrow"
                        height="30px"
                        width="40px"
                    ></Image>
                </Button>

                <Button
                    id="form-2-forward-button"
                    type="button"
                    padding="15px 24px"
                    paddingTablet="9px 27px"
                    background="#A3A380"
                    onClick={(e) => {
                        submitHandler(e);
                        props.moveForward();
                    }}
                >
                    <Span color="white" fontSize="17pt" fontSizeTablet="18pt">
                        Nästa
                    </Span>
                </Button>
            </Div>
        </Form>
    );
};
