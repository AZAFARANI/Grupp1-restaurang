import styled from "styled-components";
import { device } from "./device/Responsive";

interface IInputProps {
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

export const Input = styled.input`
    width: ${(props: IInputProps) => props.width || "100%"};
    height: ${(props: IInputProps) => props.height || "100%"};

    font-size: ${(props: IInputProps) => props.fontSize || "12pt"};

    border: none;
    border-radius: ${(props: IInputProps) => props.borderRadius || "20px"};
    box-shadow: 0px 0px 6px 3px hsla(0, 0%, 0%, 0.25) inset;

    font-family: ${(props: IInputProps) => props.fontFamily || "Sofia"};
    color: ${(props: IInputProps) => props.color || "black"};

    background-color: ${(props: IInputProps) =>
        props.backgroundColor || "hsla(0, 0%, 100%, 1)"};

    padding: ${(props: IInputProps) => props.padding || "20px"};

    @media ${device.tablet} {
        width: ${(props: IInputProps) => props.widthTablet || ""};
        height: ${(props: IInputProps) => props.heightTablet || ""};
        font-size: ${(props: IInputProps) => props.fontSizeTablet || ""};
    }

    @media ${device.laptop} {
        width: ${(props: IInputProps) => props.widthLaptop || ""};
        height: ${(props: IInputProps) => props.heightLaptop || ""};
        font-size: ${(props: IInputProps) => props.fontSizeLaptop || ""};
    }
`;
