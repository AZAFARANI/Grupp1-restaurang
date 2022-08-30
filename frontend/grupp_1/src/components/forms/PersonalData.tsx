import "../../scss/Booking.scss";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Input } from "../Styled/Input";
import { Span } from "../Styled/Span";
import { Textarea } from "../Styled/Textarea";

interface IPersonDataProps {
  setStep(step: number): void;
  bookingStep: number;
}

export const PersonalData = (props: IPersonDataProps) => {
  function handleForwardStep() {
    if (props.bookingStep === 1) {
      props.setStep(props.bookingStep + 1);
    }
  }

  return (
    <Form gap="35px" width="90%" height="auto">
      {/* EMAIL / MOBILE */}
      <Div
        applyToNthChild="odd"
        flexDirectionLaptop="row"
        widthLaptop="80%"
        gap="35px"
      >
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Din epost
          </Span>
          <Input height="50px" borderRadius="10px"></Input>
        </Div>
        {/* margin="0 0 35px 0" */}
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Mobilnummer
          </Span>
          <Input height="50px" borderRadius="10px"></Input>
        </Div>
      </Div>
      {/* FIRST NAME / LAST NAME */}
      <Div flexDirectionTablet="row" widthLaptop="80%" gap="35px">
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Förnamn
          </Span>
          <Input height="50px" borderRadius="10px"></Input>
        </Div>
        <Div>
          <Span fontSize="24px" fontSizeTablet="22px" fontSizeLaptop="20px">
            Efternamn
          </Span>
          <Input height="50px" borderRadius="10px"></Input>
        </Div>
      </Div>
      {/* ALLERGIES / BUTTONS */}
      <Div widthLaptop="80%" gap="35px">
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
          onClick={handleForwardStep}
        >
          <Span fontSize="40px" fontSizeTablet="30px" fontSizeLaptop="20px">
            Nästa
          </Span>
        </Button>
      </Div>
    </Form>
  );
};
