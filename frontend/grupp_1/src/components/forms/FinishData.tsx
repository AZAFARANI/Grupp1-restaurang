import { useNavigate } from "react-router-dom";
import INewBooking from "../../interfaces/INewBooking";
import { getValuesFromTimeStamp } from "../../utils";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

interface IFinishDataProps {
    setStep(step: number): void;
    bookingStep: number;
    currentBooking: INewBooking;
}

export const FinishData = (props: IFinishDataProps) => {
    const navigate = useNavigate();
    return (
        <Form>
            <Div
                flexDirectionLaptop="row"
                justifyContentLaptop="center"
                gapLaptop="50px"
                flexGrow="1"
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
                            <Span fontSize="20pt" color="#686868">
                                {getValuesFromTimeStamp(
                                    props.currentBooking.timestamp
                                )}
                            </Span>
                        </Div>
                        <Div>
                            <Span fontSize="18pt" color="#686868">
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
                        padding="20px 0"
                        paddingLaptop="20px 20px"
                        gap="10px"
                    >
                        {/* CUSTOMER */}
                        <Div alignItems="flex-start">
                            <Span fontSize="16pt" textDecoration="underline">
                                Bokad av
                            </Span>
                            <Span
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
                                fontSize="12pt"
                                color="#808080"
                                padding="0 0 0 20px"
                            >
                                {props.currentBooking.allergies.length > 0
                                    ? props.currentBooking.allergies
                                    : "-"}
                            </Span>
                        </Div>
                    </Div>
                </Div>
            </Div>
            <Div padding="30px">
                <Button
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="50px"
                    heightLaptop="40px"
                    width="40%"
                    type="submit"
                    background="#A3A380"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                    }}
                >
                    <Span
                        color="white"
                        fontSize="17pt"
                        fontSizeTablet="18pt"
                        fontSizeLaptop="14pt"
                    >
                        Klar!
                    </Span>
                </Button>
            </Div>
        </Form>
    );
};
