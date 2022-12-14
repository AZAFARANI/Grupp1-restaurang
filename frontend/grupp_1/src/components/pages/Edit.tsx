import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// ### INTERFACES ###
import ITramontoResponse from "../../interfaces/ITramontoResponse";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import INewBooking from "../../interfaces/INewBooking";
// ### MODELS ###
import BookingModel from "../../models/Booking";
// ### SERVICE ###
import TramontoService from "../../services/Tramonto";
// ### UTILS ###
import {
    getDivClassNames,
    getValuesFromTimeStamp,
    scrollToMain,
} from "../../utils";
// ### STYLED COMPONENTS ###
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Icon } from "../Styled/Icon";
import { Image } from "../Styled/Image";
import { Input } from "../Styled/Input";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";
import { Textarea } from "../Styled/Textarea";
// ### FONT AWSOME ICON ###
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// ### FORM ###
import { DateData } from "../forms/DateData";
import { PersonCounter } from "../forms/PersonCounter";

const service = new TramontoService();

export default function Edit() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [currentBooking, setCurrentBooking] = useState<INewBooking>({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        allergies: "",
        timestamp: "",
        guestCount: 1,
    });
    const [bookingId, setBookingId] = useState("");
    const [customerID, setCustomerId] = useState("");

    const [shouldSwitch, setShouldSwitch] = useState<boolean>(false);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [goBack, setGoBack] = useState(false);

    const [isLoadingEdit, setIsLoadingEdit] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);

    const [isChoosingNewDate, setIsChoosingNewDate] = useState(false);
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (shouldFetch) {
            setShouldFetch(false);
            const customerId = new URLSearchParams(location.search).get(
                "customerId"
            );
            if (params.id && customerId) {
                service
                    .getBookingById(params.id, customerId)
                    .then((booking: BookingModel | null) => {
                        if (booking) {
                            setCurrentBooking({
                                firstName: booking.customer.firstName,
                                lastName: booking.customer.lastName,
                                email: booking.customer.email,
                                phone: booking.customer.phone,
                                allergies: booking.allergies,
                                guestCount: booking.guestCount,
                                timestamp: booking.timestamp.toISOString(),
                            });
                            setBookingId(booking.id);
                            setCustomerId(booking.customer.id);
                            setShouldFetch(false);
                        } else {
                            alert("Din bokning finns inte.");
                            navigate("/");
                        }
                    });
            } else {
                navigate("/");
            }
        }
    }, [shouldFetch]);

    const formRef = useRef<HTMLFormElement>(null);

    function deleteBooking(e: FormEvent) {
        setIsLoadingDelete(true);
        e.preventDefault();
        const customerId = new URLSearchParams(location.search).get(
            "customerId"
        );
        const bookingId = params.id;

        if (bookingId && customerId) {
            service
                .deleteBooking(bookingId, customerId)
                .then((res: ITramontoResponse) => {
                    if (res.error) {
                        throw res.error;
                    } else {
                        alert("Din bokning togs bort.");
                        navigate("/");
                    }
                });
        }
    }
    function editBooking(e: FormEvent) {
        const form = formRef.current;
        if (form) {
            form.reportValidity();
            if (form.checkValidity()) {
                setIsLoadingEdit(true);
                e.preventDefault();
                if (currentBooking) {
                    service
                        .editBooking(bookingId, customerID, currentBooking)
                        .then((res: ITramontoResponse) => {
                            if (res.error) {
                                alert(
                                    "N??got gick fel vid uppdateringen av bokningen."
                                );
                                setIsLoadingEdit(false);
                            } else {
                                alert("Din bokning ??r uppdaterad.");
                                setIsLoadingEdit(false);
                                setShouldFetch(true);
                                navigate("/");
                            }
                        });
                }
                // else console.log("No booking found to use for edit.");
            }
        }
    }
    function handleDateOrGuestsChange(changes: INewBookingOptional) {
        console.table(changes);
        setCurrentBooking({
            ...currentBooking,
            ...changes,
        });
    }

    return (
        <Div
            backgroundImage="url(/images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)"
            backgroundPosition="top"
            justifyContent="center"
        >
            <>
                {isChoosingNewDate ? (
                    <Div
                        widthLaptop="70%"
                        backgroundColor="rgba(255, 255, 255, 0.75)"
                        padding="20px"
                        justifyContent="center"
                    >
                        {(function () {
                            switch (step) {
                                case 1:
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
                                                fontSize="20pt"
                                                padding="0 0 20px 0"
                                            >
                                                Hur m??nga ??r ni?
                                            </Span>
                                            <SeperatorLine />
                                            <PersonCounter
                                                moveBackward={() => {
                                                    scrollToMain();
                                                    setIsChoosingNewDate(false);
                                                }}
                                                moveForward={() => {
                                                    scrollToMain();
                                                    setShouldSwitch(true);
                                                }}
                                                handleNewBooking={
                                                    handleDateOrGuestsChange
                                                }
                                                currentBooking={currentBooking}
                                            />
                                        </Div>
                                    );
                                case 2:
                                    return (
                                        <Div
                                            onAnimationEnd={() => {
                                                if (shouldSwitch) {
                                                    setStep(1);
                                                    setShouldSwitch(false);
                                                    if (goBack) {
                                                        setGoBack(false);
                                                    } else {
                                                        setIsChoosingNewDate(
                                                            false
                                                        );
                                                    }
                                                }
                                            }}
                                            className={`${getDivClassNames(
                                                step,
                                                2,
                                                shouldSwitch
                                            )}`}
                                        >
                                            <Span
                                                fontSize="20pt"
                                                padding="0 0 20px 0"
                                            >
                                                N??r vill ni ??ta?
                                            </Span>
                                            <SeperatorLine />
                                            <DateData
                                                moveBackward={() => {
                                                    scrollToMain();
                                                    setGoBack(true);
                                                    setShouldSwitch(true);
                                                }}
                                                moveForward={() => {
                                                    scrollToMain();
                                                    setShouldSwitch(true);
                                                }}
                                                handleNewBooking={
                                                    handleDateOrGuestsChange
                                                }
                                                currentBooking={currentBooking}
                                            />
                                        </Div>
                                    );
                                default:
                                    return <></>;
                            }
                        })()}
                    </Div>
                ) : (
                    <>
                        {!shouldFetch ? (
                            <Form height="100%" ref={formRef}>
                                <Div
                                    flexDirectionLaptop="row"
                                    justifyContentLaptop="center"
                                    gapLaptop="50px"
                                >
                                    {/* FIRST PART */}
                                    <Div
                                        widthTablet="70%"
                                        widthLaptop="40%"
                                        backgroundImage="linear-gradient(0deg,#F3EFD8, #FFFFFF, #F3EFD8)"
                                        boxShadow="0px 8px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 200px 20px rgba(77, 71, 25, 0.25);"
                                    >
                                        <Div
                                            padding="20px 0"
                                            displayLaptop="none"
                                        >
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
                                            <Div
                                                padding="0 0 10px 0"
                                                paddingLaptop="0"
                                            >
                                                <Span
                                                    textAlign="center"
                                                    fontSize="20pt"
                                                    color="#686868"
                                                    id="edit-day-span"
                                                >
                                                    {getValuesFromTimeStamp(
                                                        currentBooking.timestamp
                                                    )}
                                                </Span>
                                            </Div>
                                            <Div>
                                                <Span
                                                    textAlign="center"
                                                    fontSize="18pt"
                                                    color="#686868"
                                                    id="edit-date-span"
                                                >
                                                    {new Date(
                                                        currentBooking.timestamp
                                                    ).toLocaleTimeString()}
                                                </Span>
                                            </Div>
                                        </Div>
                                        {/* GUEST COUNT */}
                                        <Div>
                                            <Span
                                                fontSize="16pt"
                                                textDecoration="underline"
                                            >
                                                Antal Personer
                                            </Span>
                                            <Span
                                                color="gray"
                                                id="edit-guestCount-span"
                                            >
                                                {currentBooking.guestCount}st
                                            </Span>
                                        </Div>
                                        {/* ??NDRA TID / ANTAL */}
                                        <Div padding="20px 0">
                                            <Button
                                                padding="20px"
                                                onClick={() => {
                                                    setIsChoosingNewDate(true);
                                                }}
                                            >
                                                <Span
                                                    color="black"
                                                    fontSize="14pt"
                                                >
                                                    ??ndra tid / antal
                                                </Span>
                                            </Button>
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
                                        widthTablet="70%"
                                        widthLaptop="40%"
                                        backgroundImage="linear-gradient(0deg,#F3EFD8, #FFFFFF, #F3EFD8)"
                                        boxShadow="0px 8px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 200px 20px rgba(77, 71, 25, 0.25);"
                                        gap="20px"
                                    >
                                        <Div
                                            width="90%"
                                            padding="20px 0 0 0"
                                            paddingLaptop="20px 10px"
                                            gap="5px"
                                        >
                                            {/* CUSTOMER */}
                                            <Div alignItems="flex-start">
                                                <Span
                                                    fontSize="16pt"
                                                    textDecoration="underline"
                                                >
                                                    Bokad av
                                                </Span>
                                                <Div
                                                    flexDirection="row"
                                                    gap="10px"
                                                >
                                                    {/* FIRST NAME */}
                                                    <Input
                                                        id="edit-firstName-span"
                                                        required
                                                        padding="5px"
                                                        borderRadius="5px"
                                                        type="text"
                                                        color="#808080"
                                                        value={
                                                            currentBooking.firstName
                                                        }
                                                        onChange={(e) => {
                                                            setCurrentBooking({
                                                                ...currentBooking,
                                                                ...{
                                                                    firstName:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            });
                                                        }}
                                                    />
                                                    {/* LAST NAME */}
                                                    <Input
                                                        id="edit-lastName-span"
                                                        required
                                                        padding="5px"
                                                        borderRadius="5px"
                                                        type="text"
                                                        color="#808080"
                                                        value={
                                                            currentBooking.lastName
                                                        }
                                                        onChange={(e) => {
                                                            setCurrentBooking({
                                                                ...currentBooking,
                                                                ...{
                                                                    lastName:
                                                                        e.target
                                                                            .value,
                                                                },
                                                            });
                                                        }}
                                                    />
                                                </Div>
                                            </Div>
                                            {/* EMAIL */}
                                            <Div alignItems="flex-start">
                                                <Span
                                                    fontSize="16pt"
                                                    textDecoration="underline"
                                                >
                                                    Epost
                                                </Span>
                                                <Input
                                                    id="edit-email-span"
                                                    required
                                                    padding="5px"
                                                    borderRadius="5px"
                                                    type="text"
                                                    color="#808080"
                                                    value={currentBooking.email}
                                                    onChange={(e) => {
                                                        setCurrentBooking({
                                                            ...currentBooking,
                                                            ...{
                                                                email: e.target
                                                                    .value,
                                                            },
                                                        });
                                                    }}
                                                />
                                            </Div>
                                            {/* PHONE */}
                                            <Div alignItems="flex-start">
                                                <Span
                                                    fontSize="16pt"
                                                    textDecoration="underline"
                                                >
                                                    Mobilnummer
                                                </Span>

                                                <Input
                                                    id="edit-phone-span"
                                                    required
                                                    padding="5px"
                                                    borderRadius="5px"
                                                    type="tel"
                                                    color="#808080"
                                                    value={currentBooking.phone}
                                                    onChange={(e) => {
                                                        setCurrentBooking({
                                                            ...currentBooking,
                                                            ...{
                                                                phone: e.target
                                                                    .value,
                                                            },
                                                        });
                                                    }}
                                                />
                                            </Div>

                                            {/* ALLERGIES */}
                                            <Div alignItems="flex-start">
                                                <Span
                                                    fontSize="16pt"
                                                    textDecoration="underline"
                                                >
                                                    Allergier
                                                </Span>
                                                <Textarea
                                                    id="edit-allergies-span"
                                                    height="200px"
                                                    padding="5px"
                                                    borderRadius="5px"
                                                    color="#808080"
                                                    onChange={(e) => {
                                                        setCurrentBooking({
                                                            ...currentBooking,
                                                            ...{
                                                                allergies:
                                                                    e.target
                                                                        .value,
                                                            },
                                                        });
                                                    }}
                                                    value={
                                                        currentBooking.allergies
                                                    }
                                                />
                                            </Div>
                                            {/* BUTTONS */}
                                            <Div
                                                flexDirection="row"
                                                justifyContent="space-between"
                                                padding="40px 0 40px 0"
                                            >
                                                <Button
                                                    id="edit-delete-button"
                                                    display="flex"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    height="50px"
                                                    heightLaptop="40px"
                                                    width="40%"
                                                    type="button"
                                                    background="#A3A380"
                                                    onClick={deleteBooking}
                                                >
                                                    {isLoadingDelete ? (
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
                                                            Avboka
                                                        </Span>
                                                    )}
                                                </Button>
                                                <Button
                                                    id="edit-save-button"
                                                    display="flex"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    height="50px"
                                                    heightLaptop="40px"
                                                    width="40%"
                                                    type="button"
                                                    background="#A3A380"
                                                    onClick={editBooking}
                                                >
                                                    {isLoadingEdit ? (
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
                                                            Spara
                                                        </Span>
                                                    )}
                                                </Button>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                            </Form>
                        ) : (
                            <Div
                                backgroundColor="rgba(255, 255, 255, 0.75)"
                                width="90%"
                                widthLaptop="70%"
                                justifyContent="center"
                            >
                                <Div className="spinner"></Div>
                            </Div>
                        )}
                    </>
                )}
            </>
        </Div>
    );
}
