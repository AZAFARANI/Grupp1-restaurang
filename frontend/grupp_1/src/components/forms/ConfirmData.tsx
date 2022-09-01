import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { SeperatorLine } from "../Styled/SeperatorLine";
import { Span } from "../Styled/Span";

interface IConfirmDataProps {
  moveForward(): void;
  moveBackward(): void;
}

export const ConfirmData = (props: IConfirmDataProps) => {
  return (
    <Form height="auto">
      <Div
        flexDirectionLaptop="row"
        justifyContentLaptop="center"
        gapLaptop="50px"
      >
        <Div
          width="90%"
          widthTablet="70%"
          widthLaptop="50%"
          backgroundImage="linear-gradient(0deg,#F3EFD8, #FFFFFF, #F3EFD8)"
          boxShadow="0px 8px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 200px 20px rgba(77, 71, 25, 0.25);"
        >
          <Div padding="20px 0 0 0" displayLaptop="none">
            <Image width="60%" src="/svg/Logo.svg" alt="logotype"></Image>
          </Div>
          <Div padding="0 0 40px 0">
            <SeperatorLine displayLaptop="none"></SeperatorLine>
          </Div>
          <Div padding="40px 0 0 0" paddingLaptop="0">
            <Div padding="0 0 10px 0" paddingLaptop="0">
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
          <Div
            padding="60px 0 0 0"
            paddingLaptop="0"
            flexDirectionLaptop="row"
            justifyContentLaptop="center"
            gapLaptop="20px"
          >
            <SeperatorLine widthLaptop="30%"></SeperatorLine>
            <Image
              width="30px"
              height="30px"
              display="none"
              displayLaptop="block"
              src="/svg/circle.svg"
              alt="circle"
            ></Image>
            <SeperatorLine
              display="none"
              displayTablet="block"
              widthLaptop="30%"
            ></SeperatorLine>
          </Div>
        </Div>
        <Div
          width="90%"
          widthTablet="70%"
          widthLaptop="30%"
          backgroundImage="linear-gradient(0deg,#F3EFD8, #FFFFFF, #F3EFD8)"
          boxShadow="0px 8px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 200px 20px rgba(77, 71, 25, 0.25);"
          paddingLaptop="40px"
        >
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
      </Div>
      <Div flexDirection="row" padding="40px 0 40px 0" widthTablet="85%">
        <Div alignItemsLaptop="flex-start">
          <Button
            type="button"
            padding="15px 35px"
            paddingTablet="12px 38px"
            background="#A3A380"
            onClick={props.moveBackward}
          >
            <Image
              src="/svg/left-arrow.svg"
              alt="left-arrow"
              height="30px"
              width="40px"
            ></Image>
          </Button>
        </Div>
        <Div alignItemsLaptop="flex-end">
          <Button
            type="button"
            padding="12px 26px"
            paddingTablet="9px 27px"
            background="#A3A380"
            onClick={props.moveForward}
          >
            <Span color="white" fontSize="17pt" fontSizeTablet="18pt">
              Boka
            </Span>
          </Button>
        </Div>
      </Div>
    </Form>
  );
};
