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

  overflowX?: string;
  overflowY?: string;

  gap?: string;
  gapTablet?: string;
  gapLaptop?: string;

  backgroundImage?: string;
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

  width?: string;
  widthTablet?: string;
  widthLaptop?: string;

  height?: string;
  heightTablet?: string;
  heightLaptop?: string;

  applyToNthChild?: string;
  marginChild?: string;
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
  top: ${(props: IDivProps) => props.top || "none"};
  left: ${(props: IDivProps) => props.left || "none"};
  bottom: ${(props: IDivProps) => props.bottom || "none"};
  right: ${(props: IDivProps) => props.right || "none"};

  height: ${(props: IDivProps) => props.height || "100%"};
  width: ${(props: IDivProps) => props.width || "100%"};

  display: ${(props: IDivProps) => props.display || "flex"};
  flex-direction: ${(props: IDivProps) => props.flexDirection || "column"};
  justify-content: ${(props: IDivProps) =>
    props.justifyContent || "flex-start"};
  align-items: ${(props: IDivProps) => props.alignItems || "center"};
  gap: ${(props: IDivProps) => props.gap || "0px"};
  box-shadow: ${(props: IDivProps) => props.boxShadow || ""};
  animation: ${(props: IDivProps) => props.animation || ""};
  overflow-x: ${(props: IDivProps) => props.overflowX || ""};
  overflow-y: ${(props: IDivProps) => props.overflowY || ""};

  background-image: ${(props: IDivProps) => props.backgroundImage || "none"};
  background-color: ${(props: IDivProps) => props.backgroundColor || "none"};
  background-position: center;
  background-size: cover;

  padding: ${(props: IDivProps) => props.padding || "0px"};
  margin: ${(props: IDivProps) => props.margin || "0px"};

  transition: ${(props: IDivProps) => props.transition || ""};

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

  .visible {
    animation: slide 500ms 250ms ease-in-out both;
  }

  .hidden {
    display: none;
  }

  .fadeOut {
    animation: fade 250ms 125ms ease-in-out forwards;
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

  /* & > :nth-child(${(props: IDivProps) => props.applyToNthChild || ""}) {
        margin: ${(props: IDivProps) => props.marginChild || "0 0 35px 0"};
    } */
`;
