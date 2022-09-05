import { Div } from "../Styled/Div";
import { Span } from "../Styled/Span";
import TramontoService from "../../services/Tramonto";

import IBookingExtended from "../../interfaces/IBookingExtended";

let service = new TramontoService();
export const PersonalPage = () => {
  service.getBookingsAuthorized().then((respone: IBookingExtended[]) => {
    console.log(respone);

    let date = new Date().toISOString();

    console.log(date);
  });
  return (
    <>
      <Div
        height="90vh"
        width="100%"
        backgroundImage="url(/images/jorge-zapata-4nXkhLCrkLo-unsplash.jpg)"
      >
        <Div
          height="90vh"
          width="100%"
          backgroundColor="rgba(255, 255, 255, 0.75)"
        >
          <Div margin="20vh 0vh 0vh 0vh" alignItems="center">
            <Span fontSize="1.5rem">Bokningar</Span>

            <Div height="300px" width="60%" backgroundColor="bisque"></Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};
