import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { GlassmorphDiv } from "../Styled/GlassmorphDiv";
import { Input } from "../Styled/Input";
import { Span } from "../Styled/Span";

export const Contact = () => {
  return (
    <>
      <Div backgroundImage="url(/images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)">
        <Div justifyContent="flex-end">
          <Span color="white" fontSize="2.5rem">
            Kontakt
          </Span>
        </Div>
        <Div
          margin="10vh 0vh 0vh 0vh"
          className="textArea"
          height="20vh"
          backgroundColor="#F0EEE0"
          backgroundImage="none"
          padding="20px 20px"
          width="100%"
        >
          <Span fontSize="1.5rem">
            Fyll i fälten nedan så kontaktar vi dig så fort som möjligt
          </Span>
        </Div>

        <Div
          className="bigContainer"
          padding="0px 0px"
          backgroundColor="hsla(0, 0%, 100%, 0.8)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          flexDirectionLaptop="row"
        >
          <Div
            width="100%"
            display="flex"
            flexDirection="column"
            padding="10px 0px 0px 0px"
            alignItems="center"
            gap="80px"
            margin="5% 0% 0% 0%"
          >
            <Form
              display="flex"
              flexDirection="column"
              gap="10vh"
              width="95%"
              alignItems="center"
            >
              <Div
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
              >
                <Span fontSize="1.8rem">Din e-post:</Span>
                <Input width="95%"></Input>
              </Div>

              <Div
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
              >
                <Span fontSize="1.5rem">Vad har du på hjärtat?</Span>
                <Input width="95%" height="35vh"></Input>
              </Div>
            </Form>

            <Button
              padding="10px 30px"
              background="#A3A380"
              border="none"
              color="white"
            >
              <Span color="white" fontSize="1.5rem">
                Skicka
              </Span>
            </Button>
          </Div>

          <Div
            width="100%"
            margin="5vh 0px 0px 0px"
            paddingLaptop="1% 2.5% 0% 0%"
          >
            <Span className="contactHeading" fontSize="1.6rem">
              Övrig information
            </Span>
            <Div
              width="100%"
              height="60vh"
              display="flex"
              flexDirection="row"
              backgroundColor="white"
              margin="10% 0px 0px 0px"
              marginLaptop="3% 0px 0px 0px"
            >
              <Div
                width="20%"
                height="60vh"
                backgroundColor="rgb(240, 238, 224)"
              >
                <Div
                  display="flex"
                  flexDirection="column"
                  gap="4vh"
                  alignItems="center"
                  height="60vh"
                  width="100%"
                  padding="10px 0px 0px 0px"
                >
                  <img
                    src="/svg/fxemoji_telephonereceiver2.svg"
                    alt="Phonenumber"
                  ></img>
                  <img
                    src="/svg/carbon_location-filled.svg"
                    alt="Location"
                  ></img>
                  <img src="/svg/Klocka.svg" alt="Clock"></img>
                </Div>
              </Div>
              <Div
                padding="20px"
                width="80%"
                display="flex"
                flexDirection="column"
                gap="5vh"
                alignItems="flex-end"
              >
                <Span fontSize="1.3rem">+46 123 45 57</Span>
                <Span fontSize="1.3rem">Bästa gatan 43</Span>
                <Span fontSize="1.3rem">18:00 - 00:00</Span>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};
