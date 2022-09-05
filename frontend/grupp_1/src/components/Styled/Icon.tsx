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

    color: ${(props: IIconProps) => props.color || "#cfc99b"};
    font-size: ${(props: IIconProps) => props.color || "39px"};
    text-shadow: ${(props: IIconProps) =>
        props.color || "0px 4px 4px hsla(0, 0%, 0%, 0.25)"};
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
        transform: translateX(200%);
    }

    &.visible {
        transform: translate(0%);
    }
`;
