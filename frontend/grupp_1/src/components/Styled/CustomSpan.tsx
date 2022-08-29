import styled from "styled-components";
import { device } from "./device/Responsive";

interface ISpanProps {
    fontType?: string;
    fontSize?: string;
    color?: string;
    shadow?: string;
    displayDesktop?: string;
    fontSizeDesktop?: string;
    fontSizeTablet?: string;
}

export const CustomSpan = styled.span`
    color: ${(props: ISpanProps) => props.color || "black"};

    font-family: ${(props: ISpanProps) => props.fontType || "Sofia"};

    font-size: ${(props: ISpanProps) => props.fontSize || "12pt"};

    text-shadow: ${(props: ISpanProps) =>
        props.shadow || "0px 4px 4px hsla(0, 0%, 0%, 0.25)"};

    @media ${device.tablet} {
        font-size: ${(props: ISpanProps) => props.fontSizeTablet || "12pt"};
    }

    @media ${device.desktop} {
        display: ${(props: ISpanProps) => props.displayDesktop || "contains"};
        font-size: ${(props: ISpanProps) => props.fontSizeDesktop || "12pt"};
    }
`;
