import "../../scss/Contact.scss";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { GlassmorphDiv } from "../Styled/GlassmorphDiv";
import { Input } from "../Styled/Input";
import { Span } from "../Styled/Span";

export const Contact = () => {
    return (
        <>
            <Span color="white" fontSize="1.8rem">
                Kontakt
            </Span>

            <Div
                className="textArea"
                height="20vh"
                backgroundColor="hsla(53, 35%, 91%, 1)"
                backgroundImage="none"
                padding="20px 20px"
            >
                <Span fontSize="1.5rem">
                    Fyll i fälten nedan så kontaktar vi dig så fort som möjligt
                </Span>
            </Div>

            <GlassmorphDiv
                className="bigContainer"
                padding="0px 0px"
                background="hsla(0, 0%, 100%, 0.8)"
                borderRadius="0px"
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <div className="contactRoot">
                    <form className="contactForm">
                        <div className="formDiv">
                            <Span fontSize="1.8rem">Din e-post:</Span>
                            <Input width="95%"></Input>
                        </div>

                        <div className="formDiv">
                            <Span fontSize="1.5rem">
                                Vad har du på hjärtat?
                            </Span>
                            <Input width="95%" height="35vh"></Input>
                        </div>
                    </form>

                    <Button
                        padding="10px 30px"
                        background="#A3A380"
                        color="white"
                    >
                        <Span color="white" fontSize="1.5rem">
                            Skicka
                        </Span>
                    </Button>
                </div>
                <div className="infoRootDiv">
                    <Span className="contactHeading" fontSize="1.6rem">
                        Övrig information
                    </Span>
                    <div className="informationDiv">
                        <div className="iconDiv">
                            <div className="icons">
                                <img
                                    src="/svg/fxemoji_telephonereceiver2.svg"
                                    alt="Phonenumber"
                                ></img>
                                <img
                                    src="/svg/carbon_location-filled.svg"
                                    alt="Location"
                                ></img>
                                <img src="/svg/Klocka.svg" alt="Clock"></img>
                            </div>
                        </div>
                        <div className="contactInfo">
                            <Span fontSize="1.3rem">+46 123 45 57</Span>
                            <Span fontSize="1.3rem">Bästa gatan 43</Span>
                            <Span fontSize="1.3rem">18:00 - 00:00</Span>
                        </div>
                    </div>
                </div>
            </GlassmorphDiv>
        </>
    );
};
