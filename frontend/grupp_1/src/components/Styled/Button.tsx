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
  position?: string;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  flexGrow?: string;

  width?: string;
  widthTablet?: string;
  widthLaptop?: string;

  height?: string;
  heightTablet?: string;
  heightLaptop?: string;

  display?: string;
  justifyContent?: string;
  alignItems?: string;
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
  position: ${(props: IButtonProps) => props.position || "relative"};

  top: ${(props: IButtonProps) => props.top || "none"};
  left: ${(props: IButtonProps) => props.left || "none"};
  bottom: ${(props: IButtonProps) => props.bottom || "none"};
  right: ${(props: IButtonProps) => props.right || "none"};

  transition: transform 0.2s ease;

  display: ${(props: IButtonProps) => props.display || ""};
  justify-content: ${(props: IButtonProps) => props.justifyContent || ""};
  align-items: ${(props: IButtonProps) => props.alignItems || ""};

  &:hover {
    cursor: pointer;
    transform: scale(110%) translateY(-5px);
    filter: brightness(1.05);
    z-index: 10;
  }

  @media ${device.tablet} {
    padding: ${(props: IButtonProps) => props.paddingTablet || ""};
    height: ${(props: IButtonProps) => props.heightTablet || ""};
    width: ${(props: IButtonProps) => props.widthTablet || ""};
  }

  @media ${device.laptop} {
    padding: ${(props: IButtonProps) => props.paddingLaptop || ""};
    height: ${(props: IButtonProps) => props.heightLaptop || ""};
    width: ${(props: IButtonProps) => props.widthLaptop || ""};
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
