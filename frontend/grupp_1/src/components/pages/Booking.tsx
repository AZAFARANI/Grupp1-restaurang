import { useRef, useState } from "react";
// ### INTERFACES ###
import INewBooking from "../../interfaces/INewBooking";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import { getDivClassNames, scrollToMain } from "../../utils";
// ### FORMS ###
import { ConfirmData } from "../forms/ConfirmData";
import { DateData } from "../forms/DateData";
import { FinishData } from "../forms/FinishData";
import { PersonalData } from "../forms/PersonalData";
import { PersonCounter } from "../forms/PersonCounter";
// ### STYLED COMPONENTS ###
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

    function divOnAnimationEnd() {}

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
                        displayLaptop="block"
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
                                                    setShouldSwitch(false);
                                                }
                                            }}
                                            className={`${getDivClassNames(
                                                step,
                                                1,
                                                shouldSwitch
                                            )}`}
                                        >
                                            <Span
                                                textAlign="center"
                                                fontSize="40px"
                                                shadow="none"
                                                fontSizeTablet="40px"
                                                fontSizeLaptop="40px"
                                                padding="10px"
                                            >
                                                Låt oss boka!
                                            </Span>
                                            <SeperatorLine />
                                            <PersonalData
                                                currentBooking={newBooking}
                                                moveForward={() => {
                                                    scrollToMain();
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
                                                    setShouldSwitch(false);
                                                }
                                                if (!compareButtons) {
                                                    setStep(1);
                                                    setShouldSwitch(false);
                                                    setCompareButtons(true);
                                                }
                                            }}
                                            className={`${getDivClassNames(
                                                step,
                                                2,
                                                shouldSwitch
                                            )}`}
                                        >
                                            <Span
                                                textAlign="center"
                                                fontSize="40px"
                                                shadow="none"
                                                fontSizeTablet="40px"
                                                fontSizeLaptop="40px"
                                                padding="10px"
                                            >
                                                Hur många är ni?
                                            </Span>
                                            <SeperatorLine></SeperatorLine>
                                            <PersonCounter
                                                currentBooking={newBooking}
                                                moveForward={() => {
                                                    scrollToMain();
                                                    setShouldSwitch(true);
                                                }}
                                                moveBackward={() => {
                                                    scrollToMain();
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
                                                    setShouldSwitch(false);
                                                }
                                                if (!compareButtons) {
                                                    setStep(2);
                                                    setShouldSwitch(false);
                                                    setCompareButtons(true);
                                                }
                                            }}
                                            className={`${getDivClassNames(
                                                step,
                                                3,
                                                shouldSwitch
                                            )}`}
                                        >
                                            <Span
                                                fontSize="40px"
                                                shadow="none"
                                                fontSizeTablet="40px"
                                                fontSizeLaptop="40px"
                                                padding="10px"
                                                textAlign="center"
                                            >
                                                När vill ni äta?
                                            </Span>
                                            <SeperatorLine></SeperatorLine>
                                            <DateData
                                                moveForward={() => {
                                                    scrollToMain();
                                                    setShouldSwitch(true);
                                                }}
                                                moveBackward={() => {
                                                    scrollToMain();
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
                                                    setShouldSwitch(false);
                                                }
                                                if (!compareButtons) {
                                                    setStep(3);
                                                    setShouldSwitch(false);
                                                    setCompareButtons(true);
                                                }
                                            }}
                                            className={`${getDivClassNames(
                                                step,
                                                4,
                                                shouldSwitch
                                            )}}`}
                                        >
                                            <Span
                                                textAlign="center"
                                                fontSize="40px"
                                                shadow="none"
                                                fontSizeTablet="40px"
                                                fontSizeLaptop="40px"
                                                padding="10px"
                                            >
                                                Ser allt bra ut?
                                            </Span>
                                            <SeperatorLine></SeperatorLine>
                                            <ConfirmData
                                                currentBooking={newBooking}
                                                moveForward={() => {
                                                    scrollToMain();
                                                    setShouldSwitch(true);
                                                }}
                                                moveBackward={() => {
                                                    scrollToMain();
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
                                            className={`${getDivClassNames(
                                                step,
                                                5,
                                                shouldSwitch
                                            )}`}
                                        >
                                            <Span
                                                textAlign="center"
                                                fontSize="40px"
                                                shadow="none"
                                                fontSizeTablet="40px"
                                                fontSizeLaptop="40px"
                                                padding="10px"
                                            >
                                                Klar!
                                            </Span>
                                            <SeperatorLine></SeperatorLine>
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
