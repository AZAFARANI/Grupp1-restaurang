import { Link } from "../Styled/Link";
import { A } from "../Styled/A";
import { Div } from "../Styled/Div";
import { GlassmorphDiv } from "../Styled/GlassmorphDiv";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

export default function Landing() {
  return (
    <>
      <Div display="flex" flexDirection="column" flexDirectionLaptop="row">
        <Div>
          <Div
            backgroundImage="url(/images/CapreseBackground.webp)"
            width="100%"
            height="100vh"
            justifyContent="space-around"
          >
            <Div width="100%" height="30vh" gap="20px">
              <Image
                width="80%"
                height="40vh"
                src="/svg/Logo.svg"
                className="logotype"
                alt="Logotype"
              ></Image>

              <Link to={"/booking"}>
                <GlassmorphDiv
                  className="bookingButton"
                  border="solid 0px 1px 1px 0px hsla(0, 14%, 82%, 1)"
                  background="hsla(357, 48%, 70%, 0.85)"
                  blur="hsla(0, 0%, 0%, 0.25)"
                >
                  <Span fontSize="1.4rem" color="white">
                    Boka bord
                  </Span>
                </GlassmorphDiv>
              </Link>
            </Div>
            <A width="60%" href="#menuLandning">
              <Image
                displayLaptop="none"
                width="20%"
                height="10vh"
                src="/svg/Vector-3.svg"
              ></Image>
            </A>
          </Div>
        </Div>

        <Div
          id="menuLandning"
          gap="2vh"
          padding="50px 0px"
          justifyContent="unset"
          className="Div"
          backgroundImage="url(/images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)"
        >
          <Image
            width="70%"
            height="10vh"
            src="/svg/Title.svg"
            alt="Title"
          ></Image>

          <GlassmorphDiv
            padding="10px 5px 200px 5px"
            height="70vh"
            width="90%"
            background="hsla(0, 0%, 100%, 0.8);

"
            display="flex"
            flexDirection="column"
            justifyContent="unset"
            alignItems="unset"
          >
            <Div
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              gap="20px"
              alignItems="center"
              flexDirectionTablet="row"
              height="100%"
            >
              <Div
                flexDirection="column"
                gap="0px"
                justifyContent="unset"
                alignItems="unset"
              >
                <Div
                  padding="0"
                  display="flex"
                  width="100%"
                  flexDirection="row"
                  justifyContent="center"
                  gap="10px"
                >
                  <Image
                    width="25%"
                    height="15vh"
                    src="/svg/Vector 6.svg"
                    alt="Menu Decoration Left"
                  ></Image>
                  <Span fontSize="1.5rem">Pasta</Span>
                  <Image
                    width="25%"
                    height="15vh"
                    src="/svg/Vector 7.svg"
                    alt="Menu Decoration Right"
                  ></Image>
                </Div>
                <SeperatorLine width="100%"></SeperatorLine>

                <Div gap="20px">
                  <Div
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    <Span>Pasta carbonara</Span>
                    <Span>149kr</Span>
                  </Div>

                  <Div
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    <Span>Pasta Al Tonno</Span>
                    <Span>149kr</Span>
                  </Div>

                  <Div
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="row"
                  >
                    <Span>Pasta Bolognese</Span>
                    <Span>149kr</Span>
                  </Div>
                </Div>
              </Div>

              <Div>
                <Div
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  gap="10px"
                >
                  <Image
                    width="25%"
                    height="15vh"
                    src="/svg/Vector 6.svg"
                    alt="Menu Decoration Left"
                  ></Image>
                  <Span fontSize="1.5rem">Pizza</Span>
                  <Image
                    height="15vh"
                    width="25%"
                    src="/svg/Vector 7.svg"
                    alt="Menu Decoration Right"
                  ></Image>
                </Div>
                <SeperatorLine width="100%"></SeperatorLine>
                <Div
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="row"
                >
                  <Span>Pizza Capriociosa</Span>
                  <Span>190kr</Span>
                </Div>
                <br></br>
                <Div
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="row"
                >
                  <Span>Pizza Mozarella</Span>
                  <Span>199kr</Span>
                </Div>
                <br></br>
                <Div
                  display="flex"
                  justifyContent="space-between"
                  flexDirection="row"
                >
                  <Span>Pizza Caprese</Span>
                  <Span>199kr</Span>
                </Div>
              </Div>
            </Div>
          </GlassmorphDiv>
        </Div>
      </Div>{" "}
    </>
  );
}
