import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import ITramontoResponse from "../../interfaces/ITramontoResponse";
import TramontoService from "../../services/Tramonto";
import { Button } from "../Styled/Button";
import { Div } from "../Styled/Div";
import { Form } from "../Styled/Form";
import { Input } from "../Styled/Input";
import { Span } from "../Styled/Span";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "../Styled/Icon";

const service = new TramontoService();

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const formRef = useRef<HTMLFormElement>(null);

    function submit(e: FormEvent) {
        setIsLoading(true);
        e.preventDefault();
        const form = formRef.current;
        if (form) {
            form.reportValidity();
            if (form.checkValidity()) {
                service
                    .tryLogin(email, password)
                    .then((response: ITramontoResponse) => {
                        if (response.error) {
                            alert("Något gick fel vid inloggningen.");
                        } else {
                            navigate("/personal");
                        }
                        setIsLoading(false);
                    });
            }
        }
    }

    return (
        <Div backgroundImage="url(/images/CapreseBackground.webp)">
            <Div
                backgroundColor="hsla(0, 0%, 100%, 0.8)"
                justifyContent="start"
                widthTablet="80%"
            >
                <Div
                    backgroundColor="hsla(0, 0%, 0%, 0.5)"
                    height="auto"
                    padding="10px"
                >
                    <Div alignItems="start" alignItemsTablet="center">
                        <Span
                            shadow="none"
                            fontSize="40pt"
                            fontSizeTablet="50pt"
                            fontSizeLaptop="40pt"
                            padding="10px"
                            color="white"
                        >
                            Login
                        </Span>
                    </Div>
                </Div>
                <Div justifyContent="start" padding="20px" height="auto">
                    <Form
                        gap="20px"
                        onSubmit={submit}
                        ref={formRef}
                        id="form-login"
                    >
                        <Div widthLaptop="50%" gap="10px">
                            <Span fontSize="20pt" fontSizeLaptop="20pt">
                                Email
                            </Span>
                            <Input
                                id="login-email-span"
                                required
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <Span fontSize="20pt" fontSizeLaptop="20pt">
                                Lösenord
                            </Span>
                            <Input
                                id="login-password-span"
                                required
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </Div>
                        <Button
                            id="login-forward-button"
                            background="hsl(357, 28%, 63%)"
                            type="submit"
                            onSubmit={submit}
                            width="200px"
                            height="70px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {isLoading ? (
                                <Icon
                                    fontSize="20pt"
                                    color="white"
                                    icon={faSpinner}
                                    className="spinner"
                                ></Icon>
                            ) : (
                                <Span
                                    color="white"
                                    fontSize="17pt"
                                    fontSizeTablet="18pt"
                                    fontSizeLaptop="14pt"
                                >
                                    Logga in
                                </Span>
                            )}
                        </Button>
                    </Form>
                </Div>
            </Div>
        </Div>
    );
}
