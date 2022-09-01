import { stringify } from "querystring";
import { FormEvent, useState } from "react";
import INewBooking from "../../interfaces/INewBooking";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import BookingModel from "../../models/Booking";
import "../../scss/Booking.scss";
import TramontoService from "../../services/Tramonto";
import { Booking } from "../pages/Booking";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Input } from "../Styled/Input";
import { Span } from "../Styled/Span";
import { Textarea } from "../Styled/Textarea";

interface IPersonDataProps {
  moveForward(): void;
  handleNewBooking(changes: INewBookingOptional): void;
}

export const PersonalData = (props: IPersonDataProps) => {
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [allergies, setAllergies] = useState<string>("");

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    props.moveForward();

    props.handleNewBooking({
      firstName,
      lastName,
      email,
      phone: mobileNumber,
      allergies,
    });
  }

  return (
    <Form onSubmit={submitHandler} gap="35px" width="90%" height="auto">
      {/* EMAIL / MOBILE */}
      <Div flexDirectionLaptop="row" widthLaptop="80%" gap="35px">
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Din epost
          </Span>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            height="50px"
            borderRadius="10px"
          ></Input>
        </Div>
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Mobilnummer
          </Span>
          <Input
            id="number"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
            type="text"
            height="50px"
            borderRadius="10px"
          ></Input>
        </Div>
      </Div>
      {/* FIRST NAME / LAST NAME */}
      <Div flexDirectionTablet="row" widthLaptop="80%" gap="35px">
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Förnamn
          </Span>
          <Input
            id="firstname"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            height="50px"
            borderRadius="10px"
          ></Input>
        </Div>
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Efternamn
          </Span>
          <Input
            id="lastname"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            height="50px"
            borderRadius="10px"
          ></Input>
        </Div>
      </Div>
      {/* ALLERGIES / BUTTONS */}
      <Div widthLaptop="80%" gap="35px" padding="0 0 40px 0">
        <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
          Har ni några allergier?
        </Span>
        <Textarea
          id="allergies"
          value={allergies}
          onChange={(e) => {
            setAllergies(e.target.value);
          }}
          typeof="text"
          height="200px"
          borderRadius="10px"
        ></Textarea>
        <Button
          type="button"
          padding="20px 70px"
          paddingTablet="10px 50px"
          paddingLaptop="8px 40px"
          background="#A3A380"
          onClick={submitHandler}
        >
          <Span fontSize="20px">Nästa</Span>
        </Button>
      </Div>
    </Form>
  );
};
