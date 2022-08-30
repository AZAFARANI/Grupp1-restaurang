import { useEffect, useState } from "react";
import "../../scss/Booking.scss";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { Span } from "../Styled/Span";

interface IDateDataProps {
  setStep(step: number): void;
  bookingStep: number;
}

export const DateData = (props: IDateDataProps) => {
  const [date, setDate] = useState(0);
  const [currentDate, setCurrentDate] = useState<Date>();

  useEffect(() => {
    handleDate();
  }, []);

  function handleDate() {
    let currentDate = new Date();
    var oneJan = new Date(currentDate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentDate.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);
    setDate(result);
    setCurrentDate(currentDate);
  }

  function handleForwardStep() {
    if (props.bookingStep === 3) {
      props.setStep(props.bookingStep + 1);
    }
  }

  function handleBackStep() {
    if (props.bookingStep === 3) {
      props.setStep(props.bookingStep - 1);
    }
  }
  // console.log(currentDate);

  return (
    <>
      <Form>
        <Div>
          <Div
            flexDirectionLaptop="row"
            width="80%"
            widthLaptop="90%"
            justifyContentLaptop="space-between"
          >
            <Div
              flexDirection="row"
              padding="120px 0 0 0"
              paddingLaptop="0 0 0 0"
              widthTablet="60%"
              widthLaptop="100%"
            >
              <Div>
                <Button type="button" padding="8px 14px" background="#A3A380">
                  <Image
                    src="/svg/left-arrow-form.svg"
                    alt="left-arrow"
                    width="40px"
                    height="30px"
                  ></Image>
                </Button>
              </Div>
              <Div>
                <Span fontSize="20pt" fontSizeLaptop="16pt">
                  Vecka {date}
                </Span>
              </Div>
              <Div>
                <Button type="button" padding="8px 14px" background="#A3A380">
                  <Image
                    src="/svg/right-arrow.svg"
                    alt="right-arrow"
                    width="40px"
                    height="30px"
                  ></Image>
                </Button>
              </Div>
            </Div>
            <Div
              padding="60px 0 0 0"
              paddingLaptop="0 30px 0 0"
              alignItemsLaptop="flex-end"
            >
              <Button type="button" background="#A3A380" padding="8px 14px">
                <Image
                  src="/svg/Refresh-date.svg"
                  alt="Refresh Weeks"
                  width="30px"
                  height="30px"
                ></Image>
              </Button>
            </Div>
          </Div>
          <Div flexDirectionLaptop="row">
            <Div widthLaptop="20%">
              <Div
                flexDirection="row"
                flexDirectionLaptop="column"
                justifyContent="space-between"
                width="80%"
                padding="20px 0 0 0"
              >
                <Span
                  color="#FFFFFF"
                  shadow="2px 4px 4px hsla(0, 0%, 0%, 0.80)"
                  fontSizeLaptop="18pt"
                >
                  Måndag
                </Span>
                <Span
                  color="#FFFFFF"
                  shadow="2px 4px 4px hsla(0, 0%, 0%, 0.80)"
                  fontSizeLaptop="12pt"
                >
                  29 augusti
                </Span>
              </Div>
              <Div
                flexDirection="row"
                flexDirectionLaptop="column"
                justifyContent="space-between"
                padding="15px 0 0 0"
                gap="20px"
                width="80%"
              >
                <Button
                  type="button"
                  border="1px solid white"
                  borderRadius="none"
                  padding="20px 12px"
                  paddingTablet="20px 70px"
                  paddingLaptop="12px 50px"
                  background="#D9D9D9"
                >
                  <Span color="#000000">18:00-21:00</Span>
                </Button>
                <Button
                  type="button"
                  border="1px solid white"
                  borderRadius="none"
                  padding="20px 12px"
                  paddingTablet="20px 70px"
                  paddingLaptop="12px 50px"
                  background="#D9D9D9"
                >
                  <Span color="#000000">21:00-00:00</Span>
                </Button>
              </Div>
            </Div>
          </Div>
          <Div padding="60px 0 0 0">
            <Div padding="0 0 20px 0">
              <Span fontSize="14pt" fontWeight="bold">
                Du har valt :
              </Span>
            </Div>
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
                padding="15px 24px"
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
        </Div>
      </Form>
    </>
  );
};
