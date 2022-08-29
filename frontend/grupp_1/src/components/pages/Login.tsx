import { FormEvent, useState } from "react";
import { Button } from "../Styled/CustomButton";
import { Div } from "../Styled/Div";
import { LoginForm } from "../Styled/LoginForm";
import { InputText } from "../Styled/StyledInputTypeText";
import { Span } from "../Styled/Span";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function submit(e: FormEvent) {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <Div backgroundImage="url(/images/CapreseBackground.webp)">
            <Div
                backgroundColor="hsla(0, 0%, 100%, 0.8)"
                justifyContent="start"
                tabletWidth="80%"
            >
                <Div backgroundColor="hsla(0, 0%, 0%, 0.5)" height="auto">
                    <img src="/svg/Logo.svg" alt="Logotype" />
                </Div>
                <Div justifyContent="start" padding="20px">
                    <LoginForm onSubmit={submit} applyToNthChild="even">
                        <Span fontSize="20pt" laptopFontSize="20pt">
                            Email
                        </Span>
                        <InputText
                            width="80%"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></InputText>
                        <Span fontSize="20pt" laptopFontSize="20pt">
                            Lösenord
                        </Span>
                        <InputText
                            width="80%"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></InputText>
                        <Button type="submit" onSubmit={submit} padding="20px">
                            <Span color="white" fontSize="20pt">
                                Logga In
                            </Span>
                        </Button>
                    </LoginForm>
                </Div>
            </Div>
        </Div>
    );
}
