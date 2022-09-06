import { Div } from "../Styled/Div";
import { Span } from "../Styled/Span";
import TramontoService from "../../services/Tramonto";

import IBookingExtended from "../../interfaces/IBookingExtended";
import { useEffect, useState } from "react";
import { Button } from "../Styled/Button";
import ITramontoResponse from "../../interfaces/ITramontoResponse";
import { CookiesProvider, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
        backgroundColor="#D9D9D9"
        borderRadius="15px"
        gap="20px"
        padding="20px"
        height="unset"
        justifyContent="center"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 15px 20px"
        key={i}
      >
        {" "}
        <Span>
          {bookings[i].customerId.firstName} {bookings[i].customerId.lastName}
        </Span>
        <Span>{bookings[i].timestamp}</Span>
        <Button background="blue" padding="5px 10px">
          {" "}
          <Span>Visa mer</Span>
        </Button>
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
        height="90vh"
        width="100%"
        backgroundImage="url(/images/pexels-shann-3933128.jpg)"
      >
        <Div
          height="90vh"
          width="100%"
          backgroundColor="rgba(255, 255, 255, 0.75)"
        >
          <Div
            gap="10px"
            margin="20vh 0vh 0vh 0vh"
            width="100%"
            alignItems="center"
          >
            <Span fontSize="1.5rem">Bokningar</Span>
            {bookingsHtml}
          </Div>
          <Button
            position="absolute"
            top="5vh"
            left="5%"
            onClick={logOut}
            background="red"
            padding="10px 10px"
          >
            logga ut
          </Button>
        </Div>
      </Div>
    </>
  );
};
