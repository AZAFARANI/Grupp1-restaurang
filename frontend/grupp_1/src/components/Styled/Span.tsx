import styled from "styled-components";
import { device } from "./device/Responsive";

interface ISpanProps {
    height?: string;
    width?: string;

    padding?: string;

    fontType?: string;
    fontSize?: string;
    color?: string;
    shadow?: string;

    tabletFontSize?: string;
    laptopFontSize?: string;
}

export const Span = styled.span`
    height: ${(props: ISpanProps) => props.height || "auto"};
    width: ${(props: ISpanProps) => props.width || "auto"};

    padding: ${(props: ISpanProps) => props.padding || "0px"};

    font-family: ${(props: ISpanProps) => props.fontType || "Sofia"};
    font-size: ${(props: ISpanProps) => props.fontSize || "12pt"};
    color: ${(props: ISpanProps) => props.padding || "none"};
    text-shadow: ${(props: ISpanProps) =>
        props.shadow || "0px 4px 4px hsla(0, 0%, 0%, 0.25)"};

    @media ${device.tablet} {
        font-size: ${(props: ISpanProps) => props.fontSize || "auto"};
    }

    @media ${device.laptop} {
        font-size: ${(props: ISpanProps) => props.fontSize || "auto"};
    }
`;
