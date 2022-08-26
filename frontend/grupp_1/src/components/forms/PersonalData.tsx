import "../../scss/Booking.scss";
import { Button } from "../Styled/CustomButton";
import { StyledForm } from "../Styled/CustomForm";
import { CustomSpan } from "../Styled/CustomSpan";
import { CustomSpanDiv } from "../Styled/GlassmorphDiv";
import { InputText } from "../Styled/StyledInputTypeText";

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
    <>
      <StyledForm>
        <CustomSpanDiv
          applyToNthChild="odd"
          applyToNthChildTable="even"
          flexDirectionTablet="column"
          flexDirectionDesktop="row"
          widthDesktop="80%"
        >
          <CustomSpanDiv flexDirectionTablet="column">
            <CustomSpan
              fontSize="24px"
              fontSizeTablet="22px"
              fontSizeDesktop="20px"
            >
              Din epost
            </CustomSpan>
            <InputText width="90%" height="50px" corner="10px"></InputText>
          </CustomSpanDiv>
          <CustomSpanDiv flexDirectionTablet="column" marginBottom="35px">
            <CustomSpan
              fontSize="24px"
              fontSizeTablet="22px"
              fontSizeDesktop="20px"
            >
              Mobilnummer
            </CustomSpan>
            <InputText width="90%" height="50px" corner="10px"></InputText>
          </CustomSpanDiv>
        </CustomSpanDiv>
        <CustomSpanDiv
          applyToNthChild="odd"
          applyToNthChildTable="even"
          flexDirectionDesktop="row"
          widthDesktop="80%"
          marginBottom="35px"
        >
          <CustomSpanDiv flexDirectionTablet="column" widthTablet="300px">
            <CustomSpan
              fontSize="24px"
              fontSizeTablet="22px"
              fontSizeDesktop="20px"
            >
              Förnamn
            </CustomSpan>
            <InputText
              width="90%"
              height="50px"
              corner="10px"
              widthTablet="95%"
            ></InputText>
          </CustomSpanDiv>
          <CustomSpanDiv flexDirectionTablet="column" widthTablet="300px">
            <CustomSpan
              fontSize="24px"
              fontSizeTablet="22px"
              fontSizeDesktop="20px"
            >
              Efternamn
            </CustomSpan>
            <InputText
              width="90%"
              height="50px"
              corner="10px"
              widthTablet="95%"
            ></InputText>
          </CustomSpanDiv>
        </CustomSpanDiv>
        <CustomSpanDiv
          applyToNthChild="even"
          flexDirectionTablet="column"
          widthDesktop="80%"
        >
          <CustomSpan
            fontSize="24px"
            fontSizeTablet="22px"
            fontSizeDesktop="20px"
          >
            Har ni några allergier?
          </CustomSpan>
          <InputText
            width="90%"
            height="200px"
            corner="10px"
            widthDesktop="95%"
          ></InputText>
          <Button
            type="button"
            padding="20px 70px"
            background="#A3A380"
            onClick={handleForwardStep}
          >
            <CustomSpan
              color="white"
              fontSize="40px"
              fontSizeTablet="30px"
              fontSizeDesktop="20px"
            >
              Nästa
            </CustomSpan>
          </Button>
        </CustomSpanDiv>
      </StyledForm>
    </>
  );
};
