import "../../scss/Booking.scss";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Input } from "../Styled/Input";
import { Span } from "../Styled/Span";
import { Textarea } from "../Styled/Textarea";

interface IPersonDataProps {
  moveForward(): void;
}

export const PersonalData = (props: IPersonDataProps) => {
  return (
    <Form gap="35px" width="90%" height="auto">
      {/* EMAIL / MOBILE */}
      <Div flexDirectionLaptop="row" widthLaptop="80%" gap="35px">
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Din epost
          </Span>
          <Input type="email" height="50px" borderRadius="10px"></Input>
        </Div>
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Mobilnummer
          </Span>
          <Input type="number" height="50px" borderRadius="10px"></Input>
        </Div>
      </Div>
      {/* FIRST NAME / LAST NAME */}
      <Div flexDirectionTablet="row" widthLaptop="80%" gap="35px">
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Förnamn
          </Span>
          <Input type="text" height="50px" borderRadius="10px"></Input>
        </Div>
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Efternamn
          </Span>
          <Input type="text" height="50px" borderRadius="10px"></Input>
        </Div>
      </Div>
      {/* ALLERGIES / BUTTONS */}
      <Div widthLaptop="80%" gap="35px" padding="0 0 40px 0">
        <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
          Har ni några allergier?
        </Span>
        <Textarea height="200px" borderRadius="10px"></Textarea>
        <Button
          type="button"
          padding="20px 70px"
          paddingTablet="10px 50px"
          paddingLaptop="8px 40px"
          background="#A3A380"
          onClick={props.moveForward}
        >
          <Span fontSize="20px">Nästa</Span>
        </Button>
      </Div>
    </Form>
  );
};
