import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { device } from "./device/Responsive";

interface IIconProps {
    color?: string;

    fontSize?: string;
    shadow?: string;
    zIndex?: string;
    transition?: string;
    opacity?: string;
    postion?: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    cursor?: string;

    display?: string;
    displayTablet?: string;
    displayLaptop?: string;
}

export const Icon = styled(FontAwesomeIcon)`
    position: ${(props: IIconProps) => props.postion || "relative"};
    top: ${(props: IIconProps) => props.top || ""};
    left: ${(props: IIconProps) => props.left || ""};
    bottom: ${(props: IIconProps) => props.bottom || ""};
    right: ${(props: IIconProps) => props.right || ""};
    cursor: ${(props: IIconProps) => props.cursor || "auto"};

    color: ${(props: IIconProps) => props.color || "#cfc99b"};
    font-size: ${(props: IIconProps) => props.color || "39px"};

    filter: ${(props: IIconProps) => `drop-shadow(${props.shadow})` || ""};

    z-index: ${(props: IIconProps) => props.zIndex || "1"};

    transition: ${(props: IIconProps) => props.transition || ""};
    opacity: ${(props: IIconProps) => props.opacity || "1"};

    @media ${device.tablet} {
        display: ${(props: IIconProps) => props.displayTablet || "flex"};
    }
    @media ${device.laptop} {
        display: ${(props: IIconProps) => props.displayLaptop || "flex"};
    }

    &.hidden {
        transform: translateX(25vw);
    }

    &.visible {
        transform: translate(0%);
    }

    &.spinner {
        animation: spinner 2s linear infinite;
    }

    @keyframes spinner {
        0% {
            rotate: 0deg;
        }
        100% {
            rotate: 360deg;
        }
    }
`;
