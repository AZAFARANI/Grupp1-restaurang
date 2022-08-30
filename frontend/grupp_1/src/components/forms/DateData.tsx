import { useEffect, useState } from "react";
import "../../scss/Booking.scss";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Image } from "../Styled/Image";
import { Span } from "../Styled/Span";

export const DateData = () => {
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

  console.log(currentDate);

  return (
    <>
      <Form>
        <Div>
          <Div
            flexDirection="row"
            padding="120px 0 0 0"
            widthTablet="50%"
            widthLaptop="45%"
          >
            <Div>
              <Button
                type="button"
                padding="8px 14px"
                paddingTablet="8px 14px"
                paddingLaptop="8px 14px"
                background="#A3A380"
              >
                <Image
                  src="/svg/left-arrow-form.svg"
                  alt="left-arrow"
                  width="40px"
                  height="30px"
                ></Image>
              </Button>
            </Div>
            <Div>
              <Span fontSize="20pt" fontSizeTablet="26pt" fontSizeLaptop="24pt">
                {date}
              </Span>
            </Div>
            <Div>
              <Button
                type="button"
                padding="8px 14px"
                paddingTablet="8px 14px"
                paddingLaptop="8px 14px"
                background="#A3A380"
              >
                <Image
                  src="/svg/right-arrow.svg"
                  alt="right-arrow"
                  width="40px"
                  height="30px"
                ></Image>
              </Button>
            </Div>
          </Div>
        </Div>
      </Form>
    </>
  );
};
