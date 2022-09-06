import { useEffect, useRef, useState } from "react";
import INewBooking from "../../interfaces/INewBooking";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import "../../scss/Booking.scss";
import { ConfirmData } from "../forms/ConfirmData";
import { DateData } from "../forms/DateData";
import { FinishData } from "../forms/FinishData";
import { PersonalData } from "../forms/PersonalData";
import { PersonCounter } from "../forms/PersonCounter";
import { Div } from "../Styled/Div";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

export const Booking = () => {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState<string>("Låt oss boka!");
    const [shouldSwitch, setShouldSwitch] = useState<boolean>(false);
    const [compareButtons, setCompareButtons] = useState<boolean>(true);

    const [newBooking, setNewBooking] = useState<INewBooking>({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        allergies: "",
        timestamp: "",
        guestCount: 1,
    });

    const mainRef = useRef<HTMLDivElement>(null);

    function handleNewBooking(changes: INewBookingOptional) {
        setNewBooking({ ...newBooking, ...changes });
    }

    return (
        <Div
            backgroundImage="url(images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)"
            backgroundPosition="top"
        >
            <Div widthLaptop="70%">
                {/* HEADER */}
                <Div
                    display="flex"
                    flexDirection="row"
                    height="120px"
                    width="100%"
                    justifyContent="left"
                    backgroundColorLaptop="rgba(0, 0, 0, 0.50)"
                    heightLaptop="143px"
                >
                    <Span
                        fontSize="70px"
                        fontType="Montez"
                        color="white"
                        displayLaptop="none"
                        fontSizeTablet="60px"
                    >
                        Boka
                    </Span>
                    <Image
                        src="/svg/Logo.svg"
                        alt="logotype"
                        display="none"
                        displayTablet="none"
                    ></Image>
                </Div>
                {/* MAIN */}
                <Div
                    overflowX="hidden"
                    backgroundColor="rgba(255, 255, 255, 0.75)"
                    ref={mainRef}
                    id="scrollToStartOfForm"
                    minHeight="100vh"
                >
                    {/* LÅT OSS BOKA */}
                    <Div
                        className={`${step === 1 ? "visible" : "hidden"} ${
                            shouldSwitch ? "fadeOut" : ""
                        }`}
                        padding="10px"
                        height="auto"
                    >
                        <Span
                            fontSize="40px"
                            shadow="none"
                            fontSizeTablet="40px"
                            fontSizeLaptop="40px"
                            padding="10px"
                        >
                            {title}
                        </Span>
                        <SeperatorLine></SeperatorLine>
                    </Div>
                    <Div
                        className={`${step === 2 ? "visible" : "hidden"} ${
                            shouldSwitch ? "fadeOut" : ""
                        }`}
                        padding="10px"
                        height="auto"
                    >
                        <Span
                            fontSize="40px"
                            shadow="none"
                            fontSizeTablet="40px"
                            fontSizeLaptop="40px"
                            padding="10px"
                        >
                            {title}
                        </Span>
                        <SeperatorLine></SeperatorLine>
                    </Div>
                    <Div
                        className={`${step === 3 ? "visible" : "hidden"} ${
                            shouldSwitch ? "fadeOut" : ""
                        }`}
                        padding="10px"
                        height="auto"
                    >
                        <Span
                            fontSize="40px"
                            shadow="none"
                            fontSizeTablet="40px"
                            fontSizeLaptop="40px"
                            padding="10px"
                        >
                            {title}
                        </Span>
                        <SeperatorLine></SeperatorLine>
                    </Div>
                    <Div
                        className={`${step === 4 ? "visible" : "hidden"} ${
                            shouldSwitch ? "fadeOut" : ""
                        }`}
                        padding="10px"
                        height="auto"
                    >
                        <Span
                            fontSize="40px"
                            shadow="none"
                            fontSizeTablet="40px"
                            fontSizeLaptop="40px"
                            padding="10px"
                        >
                            {title}
                        </Span>
                        <SeperatorLine></SeperatorLine>
                    </Div>
                    <Div
                        className={`${step === 5 ? "visible" : "hidden"} ${
                            shouldSwitch ? "fadeOut" : ""
                        }`}
                        padding="10px"
                        height="auto"
                    >
                        <Span
                            fontSize="40px"
                            shadow="none"
                            fontSizeTablet="40px"
                            fontSizeLaptop="40px"
                            padding="10px"
                        >
                            {title}
                        </Span>
                        <SeperatorLine></SeperatorLine>
                    </Div>
                    {/* FORM STEPS */}
                    <Div width="90%">
                        {(function () {
                            switch (step) {
                                case 1:
                                    // STEP 1
                                    return (
                                        <Div
                                            onAnimationEnd={() => {
                                                if (shouldSwitch) {
                                                    setStep(2);
                                                    setTitle(
                                                        "Hur många är ni?"
                                                    );
                                                    setShouldSwitch(false);
                                                }
                                            }}
                                            className={`${
                                                step === 1
                                                    ? "visible"
                                                    : "hidden"
                                            } ${shouldSwitch ? "fadeOut" : ""}`}
                                        >
                                            <PersonalData
                                                currentBooking={newBooking}
                                                moveForward={() => {
                                                    setShouldSwitch(true);
                                                }}
                                                handleNewBooking={(
                                                    changes: INewBookingOptional
                                                ) => {
                                                    handleNewBooking(changes);
                                                }}
                                            ></PersonalData>
                                        </Div>
                                    );
                                case 2:
                                    // STEP 2
                                    return (
                                        <Div
                                            onAnimationEnd={() => {
                                                if (shouldSwitch) {
                                                    if (compareButtons)
                                                        setStep(3);
                                                    setTitle(
                                                        "När vill ni äta?"
                                                    );
                                                    setShouldSwitch(false);
                                                }
                                                if (!compareButtons) {
                                                    setStep(1);
                                                    setTitle("Låt oss boka!");
                                                    setShouldSwitch(false);
                                                    setCompareButtons(true);
                                                }
                                            }}
                                            className={`${
                                                step === 2
                                                    ? "visible"
                                                    : "hidden"
                                            } ${
                                                shouldSwitch ? "fadeOut" : ""
                                            } `}
                                        >
                                            <PersonCounter
                                                currentBooking={newBooking}
                                                moveForward={() => {
                                                    setShouldSwitch(true);
                                                }}
                                                moveBackward={() => {
                                                    setShouldSwitch(true);
                                                    setCompareButtons(false);
                                                }}
                                                handleNewBooking={(
                                                    changes: INewBookingOptional
                                                ) => {
                                                    handleNewBooking(changes);
                                                }}
                                            ></PersonCounter>
                                        </Div>
                                    );
                                case 3:
                                    // STEP 3
                                    return (
                                        <Div
                                            onAnimationEnd={() => {
                                                if (shouldSwitch) {
                                                    if (compareButtons)
                                                        setStep(4);
                                                    setTitle(
                                                        "Ser allt bra ut?"
                                                    );
                                                    setShouldSwitch(false);
                                                }
                                                if (!compareButtons) {
                                                    setStep(2);
                                                    setTitle(
                                                        "Hur många är ni?"
                                                    );
                                                    setShouldSwitch(false);
                                                    setCompareButtons(true);
                                                }
                                            }}
                                            className={`${
                                                step === 3
                                                    ? "visible"
                                                    : "hidden"
                                            } ${shouldSwitch ? "fadeOut" : ""}`}
                                        >
                                            <DateData
                                                moveForward={() => {
                                                    setShouldSwitch(true);
                                                }}
                                                moveBackward={() => {
                                                    setShouldSwitch(true);
                                                    setCompareButtons(false);
                                                }}
                                                handleNewBooking={(
                                                    changes: INewBookingOptional
                                                ) => {
                                                    handleNewBooking(changes);
                                                }}
                                                currentBooking={newBooking}
                                            ></DateData>
                                        </Div>
                                    );
                                case 4:
                                    // STEP ¤
                                    return (
                                        <Div
                                            onAnimationEnd={() => {
                                                if (shouldSwitch) {
                                                    if (compareButtons)
                                                        setStep(5);
                                                    setTitle("Klar!");
                                                    setShouldSwitch(false);
                                                }
                                                if (!compareButtons) {
                                                    setStep(3);
                                                    setTitle(
                                                        "När vill ni äta?"
                                                    );
                                                    setShouldSwitch(false);
                                                    setCompareButtons(true);
                                                }
                                            }}
                                            className={`${
                                                step === 4
                                                    ? "visible"
                                                    : "hidden"
                                            } ${shouldSwitch ? "fadeOut" : ""}`}
                                        >
                                            <ConfirmData
                                                currentBooking={newBooking}
                                                moveForward={() => {
                                                    setShouldSwitch(true);
                                                }}
                                                moveBackward={() => {
                                                    setShouldSwitch(true);
                                                    setCompareButtons(false);
                                                }}
                                            ></ConfirmData>
                                        </Div>
                                    );
                                case 5:
                                    // STEP %
                                    return (
                                        <Div
                                            className={`${
                                                step === 5
                                                    ? "visible"
                                                    : "hidden"
                                            }`}
                                        >
                                            <FinishData
                                                currentBooking={newBooking}
                                                setStep={setStep}
                                                bookingStep={step}
                                            ></FinishData>
                                        </Div>
                                    );
                                default:
                                    return <></>;
                            }
                        })()}
                    </Div>
                </Div>
            </Div>
        </Div>
    );
};
