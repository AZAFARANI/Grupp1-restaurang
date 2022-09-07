import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import ITramontoResponse from "../../interfaces/ITramontoResponse";
import TramontoService from "../../services/Tramonto";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Input } from "../Styled/Input";
import { Span } from "../Styled/Span";
import { PersonalPage } from "./PersonalPage";

const service = new TramontoService();

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let navigate = useNavigate();

  function submit(e: FormEvent) {
    e.preventDefault();
    console.log(email, password);

    service.tryLogin(email, password).then((response: ITramontoResponse) => {
      if (response.error) {
      } else {
        navigate("/PersonalPage");
      }
    });
  }

  return (
    <Div backgroundImage="url(/images/CapreseBackground.webp)">
      <Div
        backgroundColor="hsla(0, 0%, 100%, 0.8)"
        justifyContent="start"
        widthTablet="80%"
      >
        <Div backgroundColor="hsla(0, 0%, 0%, 0.5)" height="auto">
          <img src="/svg/Logo.svg" alt="Logotype" />
        </Div>
        <Div justifyContent="start" padding="20px">
          <Form onSubmit={submit} applyToNthChild="even">
            <Span fontSize="20pt" fontSizeLaptop="20pt">
              Email
            </Span>
            <Input
              width="80%"
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Input>
            <Span fontSize="20pt" fontSizeLaptop="20pt">
              Lösenord
            </Span>
            <Input
              width="80%"
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Input>
            <Button type="submit" onSubmit={submit} padding="20px">
              <Span color="white" fontSize="20pt">
                Logga In
              </Span>
            </Button>
          </Form>
        </Div>
      </Div>
    </Div>
  );
}
