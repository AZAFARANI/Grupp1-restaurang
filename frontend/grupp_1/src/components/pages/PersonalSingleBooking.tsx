import { Link, useParams } from "react-router-dom";
import TramontoService from "../../services/Tramonto";
import IBookingExtended from "../../interfaces/IBookingExtended";
import { Div } from "../Styled/Div";
import { Span } from "../Styled/Span";
import { useEffect, useState } from "react";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Button } from "../Styled/Button";

let service = new TramontoService();
export const PersonalsingleBooking = () => {
  let params = useParams();

  const [bookings, setBookings] = useState<IBookingExtended[]>([]);
  const [booking, setBooking] = useState<IBookingExtended>();
  const [shouldFetch, setShouldFetch] = useState(false);

  let index = bookings.findIndex((b) => b._id === params.id);
  console.log(index);

  useEffect(() => {
    if (!shouldFetch) {
      service.getBookingsAuthorized().then((respone: IBookingExtended[]) => {
        setBookings(respone);
        setShouldFetch(true);

        console.log(respone);
      });
    } else {
      return;
    }
  });

  return (
    <>
      <Div
        height="100vh"
        width="100%"
        backgroundImage="url(/images/pexels-shann-3933128.jpg)"
      >
        {bookings.length > 0 ? (
          <Div backgroundColor="#F3EFD8" width="60%" height="100vh">
            <Div width="100%" height="20vh">
              <Image height="15vh" src="/svg/Logo-2.svg"></Image>
              <SeperatorLine height="1px"></SeperatorLine>
            </Div>

            <Div gap="5vh" height="10vh" margin="30px 0px 0px 0px">
              <Span>{bookings[index].timestamp}</Span>
              <SeperatorLine height="1px"></SeperatorLine>
            </Div>

            <Div height="10vh" gap="10px" margin="10px 0px 0px 0px">
              <Span textDecoration="underline">Bokad av</Span>
              <Span>
                {bookings[index].customerId.firstName}{" "}
                {bookings[index].customerId.lastName}
              </Span>
            </Div>

            <Div height="10vh" gap="10px" margin="10px 0px 0px 0px">
              <Span textDecoration="underline">Telefon</Span>

              <Span>{bookings[index].customerId.phone}</Span>
            </Div>

            <Div height="10vh" gap="10px" margin="10px 0px 0px 0px">
              <Span textDecoration="underline">Email</Span>

              <Span>{bookings[index].customerId.email}</Span>
            </Div>

            <Div height="10vh" gap="10px" margin="10px 0px 0px 0px">
              <Span textDecoration="underline">Antal Personer</Span>

              <Span>{bookings[index].guestCount}</Span>
            </Div>

            <Div height="10vh" gap="10px" margin="10px 0px 0px 0px">
              <Span textDecoration="underline">Allergier</Span>

              <Span>{bookings[index].allergies}</Span>
            </Div>

            <Button background="red" padding="5px 10px">
              Avboka
            </Button>
          </Div>
        ) : (
          <Span>inga bokningar</Span>
        )}
      </Div>
    </>
  );
};
