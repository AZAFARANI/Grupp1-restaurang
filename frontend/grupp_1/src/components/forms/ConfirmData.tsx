import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

interface IConfirmData {
  setStep(step: number): void;
  bookingStep: number;
}

export const ConfirmData = (props: IConfirmData) => {
  function handleForwardStep() {
    if (props.bookingStep === 4) {
      props.setStep(props.bookingStep + 1);
    }
  }

  function handleBackStep() {
    if (props.bookingStep === 4) {
      props.setStep(props.bookingStep - 1);
    }
  }
  return (
    <Form height="auto">
      <Div width="90%" backgroundColor="#F3EFD8">
        <Div padding="20px 0 0 0">
          <Image width="60%" src="/svg/Logo.svg" alt="logotype"></Image>
        </Div>
        <Div padding="20px 0 0 0">
          <SeperatorLine></SeperatorLine>
        </Div>
        <Div padding="40px 0 0 0">
          <Div padding="0 0 10px 0">
            <Span fontSize="20pt" color="#686868">
              Onsdag 21:a Augusti
            </Span>
          </Div>
          <Div>
            <Span fontSize="18pt" color="#686868">
              18:00 - 21:00
            </Span>
          </Div>
        </Div>
        <Div padding="40px 0 0 0">
          <SeperatorLine></SeperatorLine>
        </Div>
      </Div>
      <Div width="90%" backgroundColor="#F3EFD8">
        <Div padding="20px 0 0 0">
          <Div alignItems="flex-start" width="90%">
            <Span fontSize="16pt" textDecoration="underline">
              Bokad av
            </Span>
          </Div>
          <Div alignItems="flex-start" width="80%">
            <Span fontSize="12pt" color="#808080">
              Filip Engberg
            </Span>
          </Div>
        </Div>
        <Div padding="20px 0 0 0">
          <Div alignItems="flex-start" width="90%">
            <Span fontSize="16pt" textDecoration="underline">
              Epost
            </Span>
          </Div>
          <Div alignItems="flex-start" width="80%">
            <Span fontSize="12pt" color="#808080">
              Filip.Engberg@medieinsitutet.se
            </Span>
          </Div>
        </Div>
        <Div padding="20px 0 0 0">
          <Div alignItems="flex-start" width="90%">
            <Span fontSize="16pt" textDecoration="underline">
              Mobilnummer
            </Span>
          </Div>
          <Div alignItems="flex-start" width="80%">
            <Span fontSize="12pt" color="#808080">
              0707712715
            </Span>
          </Div>
        </Div>
        <Div padding="20px 0 0 0">
          <Div alignItems="flex-start" width="90%">
            <Span fontSize="16pt" textDecoration="underline">
              Antal Personer
            </Span>
          </Div>
          <Div alignItems="flex-start" width="80%">
            <Span fontSize="12pt" color="#808080">
              5 Personer
            </Span>
          </Div>
        </Div>
        <Div padding="20px 0 20px 0">
          <Div alignItems="flex-start" width="90%">
            <Span fontSize="16pt" textDecoration="underline">
              Allergier
            </Span>
          </Div>
          <Div alignItems="flex-start" width="80%">
            <Span fontSize="12pt" color="#808080">
              Jordnötter, Äpple
            </Span>
          </Div>
        </Div>
      </Div>
      <Div flexDirection="row" padding="40px 0 40px 0" widthLaptop="90%">
        <Div justifyContentLaptop="flex-start">
          <Button
            type="button"
            padding="15px 35px"
            paddingTablet="12px 38px"
            background="#A3A380"
            onClick={handleBackStep}
          >
            <Image
              src="/svg/left-arrow.svg"
              alt="left-arrow"
              height="30px"
              width="40px"
            ></Image>
          </Button>
        </Div>
        <Div justifyContentLaptop="flex-end">
          <Button
            type="button"
            padding="12px 26px"
            paddingTablet="9px 27px"
            background="#A3A380"
            onClick={handleForwardStep}
          >
            <Span color="white" fontSize="17pt" fontSizeTablet="18pt">
              Nästa
            </Span>
          </Button>
        </Div>
      </Div>
    </Form>
  );
};
