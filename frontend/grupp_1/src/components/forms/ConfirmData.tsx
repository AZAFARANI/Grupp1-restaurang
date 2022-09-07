import { FormEvent, useState } from "react";
import INewBooking from "../../interfaces/INewBooking";
import TramontoService from "../../services/Tramonto";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Icon } from "../Styled/Icon";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

import { getValuesFromTimeStamp } from "../../utils";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface IConfirmDataProps {
    moveForward(): void;
    moveBackward(): void;
    currentBooking: INewBooking;
}

const service = new TramontoService();

export const ConfirmData = (props: IConfirmDataProps) => {
    const [isLoading, setIsLoading] = useState(false);

    let hasSent = false;
    function submitHandler(e: FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        if (!hasSent) {
            service.addBooking(props.currentBooking).then((response) => {
                if (response.error) {
                    console.log(response.error);
                    alert(`Något gick fel med din bokning.`);
                    hasSent = false;
                } else {
                    document
                        .querySelector("#scrollToStartOfForm")
                        ?.scrollIntoView(true);
                    props.moveForward();
                }
            });
        }
    }
    return (
        <Form height="auto" onSubmit={submitHandler} id="form-4">
            <Div
                flexDirectionLaptop="row"
                justifyContentLaptop="center"
                gapLaptop="50px"
            >
                {/* FIRST PART */}
                <Div
                    width="90%"
                    widthTablet="70%"
                    widthLaptop="50%"
                    backgroundImage="linear-gradient(0deg,#F3EFD8, #FFFFFF, #F3EFD8)"
                    boxShadow="0px 8px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 200px 20px rgba(77, 71, 25, 0.25);"
                >
                    <Div padding="20px 0" displayLaptop="none">
                        <Image
                            width="60%"
                            src="/svg/Logo.svg"
                            alt="logotype"
                        ></Image>
                    </Div>
                    <Div>
                        <SeperatorLine displayLaptop="none"></SeperatorLine>
                    </Div>
                    <Div padding="40px 0px">
                        <Div padding="0 0 10px 0" paddingLaptop="0">
                            <Span
                                fontSize="20pt"
                                color="#686868"
                                id="form-4-day-span"
                            >
                                {getValuesFromTimeStamp(
                                    props.currentBooking.timestamp
                                )}
                            </Span>
                        </Div>
                        <Div>
                            <Span
                                fontSize="18pt"
                                color="#686868"
                                id="form-4-time-span"
                            >
                                {new Date(
                                    props.currentBooking.timestamp
                                ).toLocaleTimeString()}
                            </Span>
                        </Div>
                    </Div>
                    {/* CIRCLE THING */}
                    <Div
                        flexDirectionLaptop="row"
                        justifyContentLaptop="center"
                        gapLaptop="20px"
                    >
                        {/* LINE */}
                        <SeperatorLine widthLaptop="30%"></SeperatorLine>
                        {/* CIRCLE */}
                        <Image
                            width="30px"
                            height="30px"
                            display="none"
                            displayLaptop="block"
                            src="/svg/circle.svg"
                            alt="circle"
                        ></Image>
                        {/* LINE */}
                        <SeperatorLine
                            display="none"
                            displayLaptop="block"
                            widthLaptop="30%"
                        ></SeperatorLine>
                    </Div>
                </Div>
                {/* SECOND PART */}
                <Div
                    width="90%"
                    widthTablet="70%"
                    widthLaptop="50%"
                    backgroundImage="linear-gradient(0deg,#F3EFD8, #FFFFFF, #F3EFD8)"
                    boxShadow="0px 8px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 200px 20px rgba(77, 71, 25, 0.25);"
                    gap="20px"
                >
                    <Div
                        width="90%"
                        padding="20px 0 0 0"
                        paddingLaptop="20px 10px"
                        gap="10px"
                    >
                        {/* CUSTOMER */}
                        <Div alignItems="flex-start">
                            <Span fontSize="16pt" textDecoration="underline">
                                Bokad av
                            </Span>
                            <Span
                                id="form-4-name-span"
                                fontSize="12pt"
                                color="#808080"
                                padding="0 0 0 20px"
                            >
                                {props.currentBooking.firstName}{" "}
                                {props.currentBooking.lastName}
                            </Span>
                        </Div>
                        {/* EMAIL */}
                        <Div alignItems="flex-start">
                            <Span fontSize="16pt" textDecoration="underline">
                                Epost
                            </Span>
                            <Span
                                id="form-4-email-span"
                                fontSize="12pt"
                                color="#808080"
                                padding="0 0 0 20px"
                            >
                                {props.currentBooking.email}
                            </Span>
                        </Div>
                        {/* PHONE */}
                        <Div alignItems="flex-start">
                            <Span fontSize="16pt" textDecoration="underline">
                                Mobilnummer
                            </Span>
                            <Span
                                id="form-4-phone-span"
                                fontSize="12pt"
                                color="#808080"
                                padding="0 0 0 20px"
                            >
                                {props.currentBooking.phone}
                            </Span>
                        </Div>
                        {/* GUEST COUNT */}
                        <Div alignItems="flex-start">
                            <Span fontSize="16pt" textDecoration="underline">
                                Antal Personer
                            </Span>
                            <Span
                                id="form-4-guestCount-span"
                                fontSize="12pt"
                                color="#808080"
                                padding="0 0 0 20px"
                            >
                                {props.currentBooking.guestCount} Personer
                            </Span>
                        </Div>
                        {/* ALLERGIES */}
                        <Div alignItems="flex-start">
                            <Span fontSize="16pt" textDecoration="underline">
                                Allergier
                            </Span>
                            <Span
                                id="form-4-allergies-span"
                                fontSize="12pt"
                                color="#808080"
                                padding="0 0 0 20px"
                            >
                                {props.currentBooking.allergies.length > 0
                                    ? props.currentBooking.allergies
                                    : "-"}
                            </Span>
                        </Div>
                        {/* BUTTONS */}
                        <Div
                            flexDirection="row"
                            justifyContent="space-between"
                            padding="40px 0 40px 0"
                        >
                            <Button
                                id="form-4-back-button"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                height="50px"
                                heightLaptop="40px"
                                width="40%"
                                type="button"
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
                            <Button
                                id="form-4-forward-button"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                height="50px"
                                heightLaptop="40px"
                                width="40%"
                                type="submit"
                                background="#A3A380"
                            >
                                {isLoading ? (
                                    <Icon
                                        fontSize="20pt"
                                        color="white"
                                        icon={faSpinner}
                                        className="spinner"
                                    ></Icon>
                                ) : (
                                    <Span
                                        color="white"
                                        fontSize="17pt"
                                        fontSizeTablet="18pt"
                                        fontSizeLaptop="14pt"
                                    >
                                        Boka
                                    </Span>
                                )}
                            </Button>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Form>
    );
};
