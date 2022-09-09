import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// ### INTERFACES ###
import IBookingChanges from "../../interfaces/IBookingChanges";
import ITramontoResponse from "../../interfaces/ITramontoResponse";
// ### MODELS ###
import BookingModel from "../../models/Booking";
// ### SERVICE ###
import TramontoService from "../../services/Tramonto";
// ### UTILS ###
import { getValuesFromTimeStamp } from "../../utils";
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

const service = new TramontoService();

export default function Edit() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [booking, setBooking] = useState<BookingModel | null>(null);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [allergies, setAllergies] = useState("");
    const [guestCount, setGuestCount] = useState(0);
    const [timestamp, setTimestamp] = useState("");

    const [doneFetching, setDoneFetching] = useState(false);
    const [isLoadingEdit, setIsLoadingEdit] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);

    let shouldFetch = true;

    useEffect(() => {
        if (shouldFetch) {
            shouldFetch = false;
            const customerId = new URLSearchParams(location.search).get(
                "customerId"
            );
            if (params.id && customerId) {
                service
                    .getBookingById(params.id, customerId)
                    .then((booking: BookingModel | null) => {
                        if (booking) {
                            setDoneFetching(true);
                            setBooking(booking);
                            setFirstName(booking.customer.firstName);
                            setLastName(booking.customer.lastName);
                            setEmail(booking.customer.email);
                            setAllergies(booking.allergies);
                            setPhone(booking.customer.phone);
                            setGuestCount(booking.guestCount);
                            setTimestamp(booking.timestamp.toISOString());
                        } else {
                            alert("Din bokning finns inte.");
                            navigate("/");
                        }
                    });
            } else {
                navigate("/");
            }
        }
    }, []);

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
                        console.log(res.error);
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
                const changes: IBookingChanges = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    allergies: allergies,
                };
                if (booking) {
                    service
                        .editBooking(booking.id, booking.customer.id, changes)
                        .then((res: ITramontoResponse) => {
                            console.log(res);
                            if (res.error) {
                                alert(
                                    "Något gick fel vid uppdateringen av bokningen."
                                );
                                setIsLoadingEdit(false);
                            } else {
                                alert("Din bokning är uppdaterad.");
                                setIsLoadingEdit(false);
                            }
                        });
                } else console.log("No booking found to use for edit.");
            }
        }
    }

    return (
        <Div
            backgroundImage="url(/images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)"
            backgroundPosition="top"
            justifyContent="center"
        >
            {doneFetching ? (
                <Form height="auto" ref={formRef}>
                    <Div
                        flexDirectionLaptop="row"
                        justifyContentLaptop="center"
                        gapLaptop="50px"
                    >
                        {/* FIRST PART */}
                        <Div
                            width="90%"
                            widthTablet="70%"
                            widthLaptop="40%"
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
                                        id="edit-day-span"
                                    >
                                        {getValuesFromTimeStamp(timestamp)}
                                    </Span>
                                </Div>
                                <Div>
                                    <Span
                                        fontSize="18pt"
                                        color="#686868"
                                        id="edit-date-span"
                                    >
                                        {new Date(
                                            timestamp
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
                                    <Div flexDirection="row" gap="10px">
                                        {/* FIRST NAME */}
                                        <Input
                                            id="edit-firstName-span"
                                            required
                                            padding="5px"
                                            borderRadius="5px"
                                            type="text"
                                            color="#808080"
                                            value={firstName}
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
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
                                            value={lastName}
                                            onChange={(e) => {
                                                setLastName(e.target.value);
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
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
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
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    />
                                </Div>
                                {/* GUEST COUNT */}
                                <Div alignItems="flex-start">
                                    <Span
                                        fontSize="16pt"
                                        textDecoration="underline"
                                    >
                                        Antal Personer
                                    </Span>
                                    <Span
                                        padding="0 0 0 10px"
                                        color="gray"
                                        id="edit-guestCount-span"
                                    >
                                        {guestCount}st
                                    </Span>
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
                                            setAllergies(e.target.value);
                                        }}
                                        value={allergies}
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
        </Div>
    );
}
