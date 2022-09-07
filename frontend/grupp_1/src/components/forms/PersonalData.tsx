import { FormEvent, useRef, useState } from "react";
import INewBooking from "../../interfaces/INewBooking";
import INewBookingOptional from "../../interfaces/INewBookingOptional";
import CustomerModel from "../../models/Customer";
import "../../scss/Booking.scss";
import TramontoService from "../../services/Tramonto";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Input } from "../Styled/Input";
import { Span } from "../Styled/Span";
import { Textarea } from "../Styled/Textarea";

interface IPersonDataProps {
  moveForward(): void;
  handleNewBooking(changes: INewBookingOptional): void;
  currentBooking: INewBooking;
}

const service = new TramontoService();

export const PersonalData = (props: IPersonDataProps) => {
  const [email, setEmail] = useState<string>(props.currentBooking.email);
  const [phone, setPhone] = useState<string>(props.currentBooking.phone);
  const [firstName, setFirstName] = useState<string>(
    props.currentBooking.firstName
  );
  const [lastName, setLastName] = useState<string>(
    props.currentBooking.lastName
  );
  const [allergies, setAllergies] = useState<string>(
    props.currentBooking.allergies
  );

  const formRef = useRef<HTMLFormElement>(null);

  // --------------------------------------------------------
  // ### REFERENCE TO APPLY AUTO FILL FEATURE ###
  const emailRef = useRef<HTMLInputElement>(null);

  // --------------------------------------------------------

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    document.querySelector("#scrollToStartOfForm")?.scrollIntoView(true);
    const form = formRef.current;
    if (form) {
      form.reportValidity();
      if (form.checkValidity()) {
        props.moveForward();
        props.handleNewBooking({
          firstName,
          lastName,
          email,
          phone,
          allergies,
        });
      }
    }
  }

  function autoFillHandler() {
    const input = emailRef.current;
    if (input) {
      if (input.checkValidity()) {
        service
          .getCustomerByEmail(email)
          .then((customer: CustomerModel | null) => {
            if (customer) {
              setFirstName(customer.firstName);
              setLastName(customer.lastName);
              setPhone(customer.phone);
            }
            // ###
            // else {
            //   setFirstName("ELIAS");
            //   setLastName("FREDRIKSSON");
            //   setPhone("0701413808");
            // }
          });
      }
    }
  }

  return (
    <Form id="form" gap="35px" ref={formRef}>
      {/* EMAIL / MOBILE */}
      <Div flexDirectionLaptop="row" widthLaptop="80%" gap="35px">
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Din epost
          </Span>
          <Input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={autoFillHandler}
            height="50px"
            borderRadius="10px"
            ref={emailRef}
          ></Input>
        </Div>
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Mobilnummer
          </Span>
          <Input
            required
            id="number"
            minLength={10}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
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
            required
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
            required
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
      <Div widthLaptop="80%" padding="0 0 40px 0" gap="10px">
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
          id="form1-next-button"
        >
          <Span fontSize="20px">Nästa</Span>
        </Button>
      </Div>
    </Form>
  );
};
