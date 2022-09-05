import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Link } from "../Styled/Link";
import { Span } from "../Styled/Span";

export const NotFound = () => {
  return (
    <>
      <Div height="90vh" width="100%" alignItems="center" gap="20px">
        <Span fontSize="6rem">Oops!</Span>
        <Span fontSize="1.2rem"> 404 - Page not found</Span>

        <Span textAlign="center">
          Sidan du söker kan ha tagits bort, fått ett nytt namn <br></br> eller
          är för tillfället otillänglig.
        </Span>

        <Link to={"/"}>
          <Button padding="5px 10px" background="blue">
            <Span fontSize="1.4rem">Hemsida</Span>
          </Button>
        </Link>
      </Div>
    </>
  );
};
