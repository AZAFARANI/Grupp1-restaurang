import "../../scss/Contact.scss";
import { Button } from "../Styled/CustomButton";
import { CustomDiv } from "../Styled/CustomDiv";
import { CustomSpan } from "../Styled/CustomSpan";
import { GlassDiv, GlassDiv2, GlassDiv3 } from "../Styled/GlassmorphDiv";
import { InputText } from "../Styled/StyledInputTypeText";

export const Contact = () => {
  return (
    <>
      <CustomSpan color="white" fontSize="1.8rem">
        Kontakt
      </CustomSpan>

      <CustomDiv
        className="textArea"
        height="20vh"
        backgroundColor="hsla(53, 35%, 91%, 1)"
        backgroundImage="none"
        padding="20px 20px"
      >
        <CustomSpan fontSize="1.5rem">
          Fyll i fälten nedan så kontaktar vi dig så fort som möjligt
        </CustomSpan>
      </CustomDiv>

      <GlassDiv3
        className="bigContainer"
        padding="0px 0px"
        background="hsla(0, 0%, 100%, 0.8)"
      >
        <div className="contactRoot">
          <form className="contactForm">
            <div className="formDiv">
              <CustomSpan fontSize="1.8rem">Din e-post:</CustomSpan>
              <InputText width="95%"></InputText>
            </div>

            <div className="formDiv">
              <CustomSpan fontSize="1.5rem">Vad har du på hjärtat?</CustomSpan>
              <InputText width="95%" height="35vh"></InputText>
            </div>
          </form>

          <Button padding="10px 30px" background="#A3A380" color="white">
            <CustomSpan color="white" fontSize="1.5rem">
              Skicka
            </CustomSpan>
          </Button>
        </div>
        <div className="infoRootDiv">
          <CustomSpan className="contactHeading" fontSize="1.6rem">
            Övrig information
          </CustomSpan>
          <div className="informationDiv">
            <div className="iconDiv">
              <div className="icons">
                <img src="/svg/fxemoji_telephonereceiver2.svg"></img>
                <img src="/svg/carbon_location-filled.svg"></img>
                <img src="/svg/Klocka.svg"></img>
              </div>
            </div>
            <div className="contactInfo">
              <CustomSpan fontSize="1.3rem">+46 123 45 57</CustomSpan>
              <CustomSpan fontSize="1.3rem">Bästa gatan 43</CustomSpan>
              <CustomSpan fontSize="1.3rem">18:00 - 00:00</CustomSpan>
            </div>
          </div>
        </div>
      </GlassDiv3>
    </>
  );
};
