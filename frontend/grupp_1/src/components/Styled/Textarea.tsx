import styled from "styled-components";
import { device } from "./device/Responsive";

interface ITextareaProps {
    border?: string;
    borderRadius?: string;

    color?: string;
    backgroundColor?: string;

    padding?: string;

    fontFamily?: string;
    fontSize?: string;
    fontSizeTablet?: string;
    fontSizeLaptop?: string;

    width?: string;
    widthTablet?: string;
    widthLaptop?: string;

    height?: string;
    heightTablet?: string;
    heightLaptop?: string;
}

export const Textarea = styled.textarea`
    width: ${(props: ITextareaProps) => props.width || "100%"};
    height: ${(props: ITextareaProps) => props.height || "100%"};

    font-size: ${(props: ITextareaProps) => props.fontSize || "12pt"};

    border: none;
    border-radius: ${(props: ITextareaProps) => props.borderRadius || "20px"};
    box-shadow: 0px 0px 6px 3px hsla(0, 0%, 0%, 0.25) inset;

    font-family: ${(props: ITextareaProps) => props.fontFamily || "Sofia"};
    color: ${(props: ITextareaProps) => props.color || "black"};

    background-color: ${(props: ITextareaProps) =>
        props.backgroundColor || "hsla(0, 0%, 100%, 1)"};

    padding: ${(props: ITextareaProps) => props.padding || "20px"};

    /* &:focus {
        outline: 50px solid red;
    } */

    @media ${device.tablet} {
        width: ${(props: ITextareaProps) => props.widthTablet || ""};
        height: ${(props: ITextareaProps) => props.heightTablet || ""};
        font-size: ${(props: ITextareaProps) => props.fontSizeTablet || ""};
    }

    @media ${device.laptop} {
        width: ${(props: ITextareaProps) => props.widthLaptop || ""};
        height: ${(props: ITextareaProps) => props.heightLaptop || ""};
        font-size: ${(props: ITextareaProps) => props.fontSizeLaptop || ""};
    }
`;
