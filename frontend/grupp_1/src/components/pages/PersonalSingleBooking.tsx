import { useNavigate, useParams } from "react-router-dom";
import TramontoService from "../../services/Tramonto";
import { Div } from "../Styled/Div";
import { Span } from "../Styled/Span";
import { useEffect, useState } from "react";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Button } from "../Styled/Button";
import BookingModel from "../../models/Booking";

const service = new TramontoService();
export const PersonalsingleBooking = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState<BookingModel | null>(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  // console.log(index);

  useEffect(() => {
    if (!shouldFetch) {
      const bookingId = params.id;
      if (bookingId) {
        service.getBookingById(bookingId).then((booking) => {
          setBooking(booking);
        });
      }
    } else {
      return;
    }
  });

  return (
    <Div width="100%" backgroundImage="url(/images/pexels-shann-3933128.jpg)">
      <Div backgroundColor="rgba(255, 255, 255, 0.75)" padding="20px 0">
        {booking ? (
          <Div
            backgroundColor="#F3EFD8"
            width="90%"
            widthTablet="50%"
            widthLaptop="40%"
            height="auto"
            padding="0px 0px 20px 0px"
            backgroundImage="linear-gradient(0deg,#F3EFD8, #FFFFFF, #F3EFD8)"
            boxShadow="0px 8px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 200px 20px rgba(77, 71, 25, 0.25);"
            gap="10px"
          >
            {/* LOGO */}
            <Div height="auto" padding="10px" paddingLaptop="20px">
              <Image padding="10px 0" src="/svg/Logo.svg" />
            </Div>

            <SeperatorLine height="2px"></SeperatorLine>

            {/* DATE */}
            <Div gap="5px" justifyContent="center">
              <Span padding="5px">
                {booking.timestamp.toLocaleDateString() +
                  " " +
                  booking.timestamp.toLocaleTimeString()}
              </Span>
            </Div>
            <SeperatorLine height="2px"></SeperatorLine>

            {/* CUSTOMER */}
            <Div gap="5px">
              <Span textDecoration="underline">Bokad av</Span>
              <Span>
                {booking.customer.firstName} {booking.customer.lastName}
              </Span>
            </Div>

            <Div gap="5px">
              <Span textDecoration="underline">Telefon</Span>

              <Span>{booking.customer.phone}</Span>
            </Div>

            <Div gap="5px">
              <Span textDecoration="underline">Email</Span>

              <Span>{booking.customer.email}</Span>
            </Div>

            <Div gap="5px">
              <Span textDecoration="underline">Antal Personer</Span>

              <Span>{booking.guestCount}</Span>
            </Div>

            <Div gap="5px">
              <Span textDecoration="underline">Allergier</Span>

              <Span>{booking.allergies}</Span>
            </Div>

            <Button
              id="single-booking-btn"
              onClick={() => {
                console.log("LSKDJFSLKJDF");
                if (booking) {
                  navigate(
                    `/bookings/${booking.id}?customerId=${booking.customer.id}`
                  );
                }
              }}
              background="#A3A380"
              padding="5px 10px"
            >
              Redigera
            </Button>
          </Div>
        ) : (
          <Span>inga bokningar</Span>
        )}
      </Div>
    </Div>
  );
};
