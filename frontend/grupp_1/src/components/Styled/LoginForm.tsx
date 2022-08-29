import styled from "styled-components";
import { device } from "./device/Responsive";

interface ILoginForm {
    display?: string;
    alignItems?: string;
    width?: string;
    height?: string;
    direction?: string;
    gap?: string;
    applyToNthChild?: string;

    padding?: string;
}

export const LoginForm = styled.form`
    display: ${(props: ILoginForm) => props.display || "flex"};
    align-items: ${(props: ILoginForm) => props.alignItems || "center"};
    flex-direction: ${(props: ILoginForm) => props.direction || "column"};
    width: ${(props: ILoginForm) => props.width || "100%"};
    height: ${(props: ILoginForm) => props.height || "100%"};

    padding: ${(props: ILoginForm) => props.padding || "0px"};

    & > :nth-child(${(props: ILoginForm) => props.applyToNthChild || "none"}) {
        margin: 0 0 35px 0;
    }
`;
