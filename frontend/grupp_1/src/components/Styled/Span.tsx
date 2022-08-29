import styled from "styled-components";
import { device } from "./device/Responsive";

interface ISpanProps {
    height?: string;
    width?: string;

    padding?: string;

    fontType?: string;
    color?: string;
    shadow?: string;

    fontSize?: string;
    fontSizeTablet?: string;
    fontSizeLaptop?: string;

    display?: string;
    displayTablet?: string;
    displayLaptop?: string;
}

export const Span = styled.span`
    height: ${(props: ISpanProps) => props.height || "auto"};
    width: ${(props: ISpanProps) => props.width || "auto"};

    padding: ${(props: ISpanProps) => props.padding || "0px"};

    font-family: ${(props: ISpanProps) => props.fontType || "Sofia"};
    font-size: ${(props: ISpanProps) => props.fontSize || "12pt"};
    color: ${(props: ISpanProps) => props.color || "none"};
    text-shadow: ${(props: ISpanProps) =>
        props.shadow || "0px 4px 4px hsla(0, 0%, 0%, 0.25)"};
    display: ${(props: ISpanProps) => props.display || "block"};

    @media ${device.tablet} {
        font-size: ${(props: ISpanProps) => props.fontSize || ""};
        display: ${(props: ISpanProps) => props.displayTablet || ""};
    }

    @media ${device.laptop} {
        font-size: ${(props: ISpanProps) => props.fontSize || ""};
        display: ${(props: ISpanProps) => props.displayLaptop || ""};
    }
`;