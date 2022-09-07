import { Link, useNavigate, useParams } from "react-router-dom";
import TramontoService from "../../services/Tramonto";
import IBookingExtended from "../../interfaces/IBookingExtended";
import { Div } from "../Styled/Div";
import { Span } from "../Styled/Span";
import { useEffect, useState } from "react";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Button } from "../Styled/Button";
import ITramontoResponse from "../../interfaces/ITramontoResponse";

let service = new TramontoService();
export const PersonalsingleBooking = () => {
  let params = useParams();
  let navigate = useNavigate();

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

  const deleteBooking = () => {
    service
      .deleteBooking(bookings[index]._id, bookings[index].customerId._id)
      .then((response: ITramontoResponse) => {
        if (response.error) {
          console.log("error");
        } else {
          navigate("/PersonalPage");
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
          backgroundColor="rgba(255, 255, 255, 0.75)"
          padding="50px 0px 50px 0px"
        >
          {bookings.length > 0 ? (
            <Div
              backgroundColor="#F3EFD8"
              width="70%"
              widthTablet="50%"
              widthLaptop="40%"
              height="auto"
              padding="0px 0px 20px 0px"
              backgroundImage="linear-gradient(0deg,#F3EFD8, #FFFFFF, #F3EFD8)"
              boxShadow="0px 8px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 200px 20px rgba(77, 71, 25, 0.25);"
            >
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

              <Button
                onClick={deleteBooking}
                background="red"
                padding="5px 10px"
              >
                Avboka
              </Button>
            </Div>
          ) : (
            <Span>inga bokningar</Span>
          )}
        </Div>
      </Div>
    </>
  );
};
