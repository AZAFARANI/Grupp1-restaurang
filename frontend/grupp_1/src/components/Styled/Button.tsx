import styled from "styled-components";
import { device } from "./device/Responsive";

interface IButtonProps {
    color?: string;
    background?: string;
    padding?: string;
    paddingTablet?: string;
    paddingLaptop?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    backdropFilter?: string;
    fontFamily?: string;
    width?: string;
    height?: string;
    flexGrow?: string;
}

// ----------------------------------------------------
// ### OLD DEFAULT COLORS ###
// Old background-color: "hsla(0, 14%, 82%, 1)"
// ----------------------------------------------------

export const Button = styled.button`
    width: ${(props: IButtonProps) => props.width || "auto"};
    height: ${(props: IButtonProps) => props.height || "auto"};

    color: ${(props: IButtonProps) => props.color || "white"};
    padding: ${(props: IButtonProps) => props.padding || "0px"};
    background-color: ${(props: IButtonProps) => props.background || "none"};

    border: ${(props: IButtonProps) => props.border || "none"};
    border-radius: ${(props: IButtonProps) => props.borderRadius || "10px"};

    box-shadow: ${(props: IButtonProps) =>
        props.boxShadow || "0px 4px 4px rgba(0, 0, 0, 0.25)"};

    backdrop-filter: ${(props: IButtonProps) =>
        props.backdropFilter || "blur(6px)"};

    font-family: ${(props: IButtonProps) => props.fontFamily || "Sofia"};
    flex-grow: ${(props: IButtonProps) => props.flexGrow || "auto"};

    transition: transform 0.2s ease;

    &:hover {
        cursor: pointer;
        transform: scale(110%) translateY(-5px);
        filter: brightness(1.05);
        z-index: 10;
    }

    @media ${device.tablet} {
        padding: ${(props: IButtonProps) => props.paddingTablet || ""};
    }

    @media ${device.laptop} {
        padding: ${(props: IButtonProps) => props.paddingLaptop || ""};
    }

    &.active {
        pointer-events: all;
    }

    &.disabled {
        pointer-events: none;
        opacity: 0.6;
        filter: brightness(0.8) blur(0.5px);
    }
`;
