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
  const [shouldFetch, setShouldFetch] = useState(false);

  if (!shouldFetch) {
    service.getBookingsAuthorized().then((respone: IBookingExtended[]) => {
      setBookings(respone);
      setShouldFetch(true);

      console.log(respone, bookings);
    });
  }

  let bookingsHtml = bookings.map((booking, i) => {
    return (
      <Div
        width="60%"
        widthTablet="50%"
        widthLaptop="40%"
        backgroundColor="#D9D9D9"
        borderRadius="15px"
        gap="20px"
        padding="20px"
        height="auto"
        justifyContent="center"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 15px 20px"
        key={i}
      >
        {" "}
        <Span>
          {bookings[i].customerId.firstName} {bookings[i].customerId.lastName}
        </Span>
        <Span>{bookings[i].timestamp}</Span>
        <Link to={"/booking/" + bookings[i]._id}>
          <Button background="blue" padding="5px 10px">
            {" "}
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
    <>
      <Div
        height="auto"
        width="100%"
        backgroundImage="url(/images/pexels-shann-3933128.jpg)"
      >
        <Div
          padding="0px 0px 0px 5%"
          gap="20px"
          flexDirection="row"
          backgroundColor="rgba(255, 255, 255, 0.75)"
          alignItems="center"
          justifyContent="flex-start"
          height="15vh"
          width="100%"
        >
          <Button onClick={logOut} background="red" padding="10px 10px">
            logga ut
          </Button>

          <Link to={"/booking"}>
            <Button background="#A3A380" padding="10px 10px">
              Ny Bokning
            </Button>
          </Link>
        </Div>
        <Div
          padding="0px 0px 50px 0px"
          height="auto"
          width="100%"
          backgroundColor="rgba(255, 255, 255, 0.75)"
        >
          <Div
            gap="20px"
            margin="5vh 0vh 0vh 0vh"
            width="100%"
            alignItems="center"
            height="auto"
          >
            <Span fontSize="1.5rem">Bokningar</Span>
            {bookingsHtml}
          </Div>
        </Div>
      </Div>
    </>
  );
};
