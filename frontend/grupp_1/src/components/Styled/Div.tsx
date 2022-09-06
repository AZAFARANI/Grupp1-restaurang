import styled from "styled-components";
import { device } from "./device/Responsive";

interface IDivProps {
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;

  boxShadow?: string;
  animation?: string;
  overflow?: string;
  transition?: string;
  transform?: string;
  animationDelay?: string;

  overflowX?: string;
  overflowY?: string;

  gap?: string;
  gapTablet?: string;
  gapLaptop?: string;

  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundColor?: string;
  backgroundColorTablet?: string;
  backgroundColorLaptop?: string;

  padding?: string;
  paddingTablet?: string;
  paddingLaptop?: string;

  margin?: string;
  marginTablet?: string;
  marginLaptop?: string;

  display?: string;
  displayTablet?: string;
  displayLaptop?: string;

  flexDirection?: string;
  flexDirectionTablet?: string;
  flexDirectionLaptop?: string;

  alignItems?: string;
  alignItemsTablet?: string;
  alignItemsLaptop?: string;

  justifyContent?: string;
  justifyContentTablet?: string;
  justifyContentLaptop?: string;

  flexGrow?: string;

  width?: string;
  widthTablet?: string;
  widthLaptop?: string;

  height?: string;
  heightTablet?: string;
  heightLaptop?: string;

  applyToNthChild?: string;
  marginChild?: string;
  borderRadius?: string;
  zIndex?: string;
  pointerEvents?: string;
  opacity?: string;

  border?: string;
  minHeight?: string;
}

// ### OLD STUFF ###
// Background color = #CFC99B
// "url(/images/CapreseBackground.webp)"
// ######### MARGIN / PADDING SHORTHAND ########
// margin: 25px 50px 75px 100px;
// top margin is        25px
// right margin is      50px
// bottom margin is     75px
// left margin is       100px
// ################

export const Div = styled.div`
  position: ${(props: IDivProps) => props.position || "relative"};
  top: ${(props: IDivProps) => props.top || ""};
  left: ${(props: IDivProps) => props.left || ""};
  bottom: ${(props: IDivProps) => props.bottom || ""};
  right: ${(props: IDivProps) => props.right || ""};
  border-radius: ${(props: IDivProps) => props.borderRadius || ""};
  pointer-events: ${(props: IDivProps) => props.pointerEvents || ""};
  height: ${(props: IDivProps) => props.height || "100%"};
  width: ${(props: IDivProps) => props.width || "100%"};
  opacity: ${(props: IDivProps) => props.opacity || ""};
  transform: ${(props: IDivProps) => props.transform || ""};

  flex-grow: ${(props: IDivProps) => props.flexGrow || ""};
  display: ${(props: IDivProps) => props.display || "flex"};
  flex-direction: ${(props: IDivProps) => props.flexDirection || "column"};
  justify-content: ${(props: IDivProps) =>
    props.justifyContent || "flex-start"};
  align-items: ${(props: IDivProps) => props.alignItems || "center"};
  gap: ${(props: IDivProps) => props.gap || ""};
  box-shadow: ${(props: IDivProps) => props.boxShadow || ""};
  animation: ${(props: IDivProps) => props.animation || ""};
  overflow-x: ${(props: IDivProps) => props.overflowX || ""};
  overflow-y: ${(props: IDivProps) => props.overflowY || ""};
  animation-delay: ${(props: IDivProps) => props.animationDelay || ""};

  background-image: ${(props: IDivProps) => props.backgroundImage || ""};
  background-color: ${(props: IDivProps) => props.backgroundColor || ""};
  background-position: ${(props: IDivProps) =>
    props.backgroundPosition || "center"};
  background-size: ${(props: IDivProps) => props.backgroundSize || "cover"};

  padding: ${(props: IDivProps) => props.padding || ""};
  margin: ${(props: IDivProps) => props.margin || ""};
  z-index: ${(props: IDivProps) => props.zIndex || "0"};

  transition: ${(props: IDivProps) => props.transition || ""};
  border: ${(props: IDivProps) => props.border || "none"};

  min-height: ${(props: IDivProps) => props.minHeight || ""};

  @media ${device.tablet} {
    width: ${(props: IDivProps) => props.widthTablet || ""};
    height: ${(props: IDivProps) => props.heightTablet || ""};

    display: ${(props: IDivProps) => props.displayTablet || ""};
    flex-direction: ${(props: IDivProps) => props.flexDirectionTablet || ""};
    align-items: ${(props: IDivProps) => props.alignItemsTablet || ""};
    justify-content: ${(props: IDivProps) => props.justifyContentTablet || ""};
    gap: ${(props: IDivProps) => props.gapTablet || ""};

    padding: ${(props: IDivProps) => props.paddingTablet || ""};
    margin: ${(props: IDivProps) => props.marginTablet || ""};
    background-color: ${(props: IDivProps) =>
      props.backgroundColorTablet || ""};
  }

  @media ${device.laptop} {
    width: ${(props: IDivProps) => props.widthLaptop || ""};
    height: ${(props: IDivProps) => props.heightLaptop || ""};

    display: ${(props: IDivProps) => props.displayLaptop || ""};
    flex-direction: ${(props: IDivProps) => props.flexDirectionLaptop || ""};
    align-items: ${(props: IDivProps) => props.alignItemsLaptop || ""};
    justify-content: ${(props: IDivProps) => props.justifyContentLaptop || ""};
    gap: ${(props: IDivProps) => props.gapLaptop || ""};

    padding: ${(props: IDivProps) => props.paddingLaptop || ""};
    margin: ${(props: IDivProps) => props.marginLaptop || ""};

    background-color: ${(props: IDivProps) =>
      props.backgroundColorLaptop || ""};
  }

  &.visible {
    animation: slide 500ms 250ms ease-in-out both;
  }

  &.hidden {
    display: none;
    opacity: 0;
  }

  &.show-menu {
    left: 0%;
    opacity: 1;
  }
  &.hide-menu {
    left: -110%;
    opacity: 0;
  }

  &.fadeOut {
    animation: fade 250ms 125ms ease-in-out forwards;
  }

  &.spinner {
    height: 100px;
    width: 100px;
    border-top: 5px solid hsl(60, 16%, 57%);
    border-radius: 50%;
    animation: spinner 2s linear infinite;
  }

  &.show {
    animation: slide-in-from-bottom 500ms 250ms ease-in-out both;
    animation-delay: 1s;
  }

  @keyframes slide {
    0% {
      transform: translateX(200%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fade {
    0% {
      transform: scale(1);
      opacity: 0;
    }

    50% {
      transform: scale(0.75);
      opacity: 0;
    }
    100% {
      transform: scale(0);
    }
  }
  &.visible {
    animation: slide 500ms ease-in-out both;
  }

  @keyframes slide-in-left {
    0% {
      left: -100%;
      opacity: 0;
    }

    100% {
      left: 0%;
      opacity: 1;
    }
  }
  &.fadeOut {
    animation: fade 250ms ease-in-out forwards;
  }

  @keyframes spinner {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }

  @keyframes fade {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes slide-in-from-bottom {
    0% {
      bottom: -100%;
      opacity: 0;
    }
    100% {
      bottom: 2%;
      opacity: 1;
    }
  }

  /* & > :nth-child(${(props: IDivProps) => props.applyToNthChild || ""}) {
        margin: ${(props: IDivProps) => props.marginChild || "0 0 35px 0"};
    } */
`;
