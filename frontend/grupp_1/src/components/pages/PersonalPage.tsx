import { Div } from "../Styled/Div";
import { Span } from "../Styled/Span";
import TramontoService from "../../services/Tramonto";

import IBookingExtended from "../../interfaces/IBookingExtended";
import { useEffect, useState } from "react";
import { Button } from "../Styled/Button";
import ITramontoResponse from "../../interfaces/ITramontoResponse";
import { CookiesProvider, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "../Styled/Link";
import { PersonalsingleBooking } from "./PersonalSingleBooking";
import PersonalModel from "../../models/Personal";

let service = new TramontoService();

export const PersonalPage = () => {
    let cookie = useCookies();

    const isEmpty = Object.keys(cookie[0]).length === 0;

    let navigate = useNavigate();

    if (isEmpty) {
        console.log("not found");
        navigate("/");
    } else {
        console.log("exists");
    }

    const [bookings, setBookings] = useState<IBookingExtended[]>([]);
    const [personal, setPersonal] = useState<PersonalModel[]>([]);
    const [shouldFetch, setShouldFetch] = useState(true);

    if (shouldFetch) {
        service.getBookingsAuthorized().then((bookings: IBookingExtended[]) => {
            setBookings(bookings);
            setShouldFetch(false);
        });
        service.getPersonal().then((personal: PersonalModel[]) => {
            setPersonal(personal);
            setShouldFetch(false);
        });
    }

    const bookingsHtml = bookings.map((booking, i) => {
        const date = new Date(booking.timestamp);
        return (
            <Div
                backgroundColor="#f3f3f3"
                borderRadius="15px"
                gap="20px"
                padding="10px"
                height="auto"
                flexDirection="column"
                flexDirectionTablet="row"
                justifyContent="space-between"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 15px 20px"
                key={i}
            >
                <Span>
                    {booking.customerId.firstName} {booking.customerId.lastName}
                </Span>
                <Span textAlign="center">
                    {date.toLocaleDateString() +
                        " " +
                        date.toLocaleTimeString()}
                </Span>
                <Link to={"/personal/bookings/" + bookings[i]._id}>
                    <Button background="hsl(60, 16%, 57%)" padding="5px 10px">
                        {" "}
                        <Span>Visa mer</Span>
                    </Button>
                </Link>
            </Div>
        );
    });

    const personalHtml = personal.map((personal, i) => {
        return (
            <Div
                backgroundColor="#f3f3f3"
                borderRadius="15px"
                gap="20px"
                padding="10px"
                height="auto"
                flexDirection="column"
                flexDirectionTablet="row"
                justifyContent="space-between"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 15px 20px"
                key={i}
            >
                <Span>{personal.firstName + " " + personal.lastName}</Span>
                <Link to={"/personal/bookings/" + personal.id}>
                    <Button background="hsl(60, 16%, 57%)" padding="5px 10px">
                        <Span>Visa mer</Span>
                    </Button>
                </Link>
            </Div>
        );
    });

    const logOut = () => {
        service.tryLogout().then((response: ITramontoResponse) => {
            if (response.error) {
                console.log("failed");
            } else {
                navigate("/");
            }
        });
    };

    return (
        <Div
            width="100%"
            backgroundImage="url(/images/pexels-shann-3933128.jpg)"
        >
            {/* HEADER*/}
            <Div
                gap="20px"
                flexDirection="row"
                backgroundColor="rgba(255, 255, 255, 0.75)"
                alignItems="center"
                padding="20px"
                height="auto"
            >
                <Button
                    onClick={logOut}
                    background="hsl(357, 28%, 63%)"
                    padding="10px 10px"
                >
                    logga ut
                </Button>

                <Link to={"/bookings"}>
                    <Button background="#A3A380" padding="10px 10px">
                        Ny Bokning
                    </Button>
                </Link>
            </Div>
            <Div
                heightLaptop="80vh"
                flexGrow="1"
                width="100%"
                backgroundColor="rgba(255, 255, 255, 0.75)"
                flexDirection="column"
                flexDirectionLaptop="row"
                padding="20px"
                gap="20px"
            >
                {/* BOOKINGS */}
                <Div gap="20px">
                    <Span fontSize="18pt">Bokningar</Span>
                    <Div
                        overflowY="auto"
                        backgroundColor="hsla(60, 16%, 77%, 0.5)"
                        borderRadius="10px"
                        boxShadow="0px 0px 5px 5px rgba(0,0,0,0.3)"
                        gap="20px"
                        padding="20px"
                    >
                        {bookingsHtml}
                    </Div>
                </Div>
                {/* PERSONAL */}
                <Div gap="20px">
                    <Span fontSize="18pt">Personal</Span>
                    <Div
                        overflowY="auto"
                        backgroundColor="hsla(60, 16%, 77%, 0.5)"
                        borderRadius="10px"
                        boxShadow="0px 0px 5px 5px rgba(0,0,0,0.3)"
                        gap="20px"
                        padding="20px"
                    >
                        {personalHtml}
                    </Div>
                </Div>
            </Div>
        </Div>
    );
};
