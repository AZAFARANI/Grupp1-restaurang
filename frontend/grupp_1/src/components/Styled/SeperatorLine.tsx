import styled from "styled-components";
import { device } from "./device/Responsive";

interface ISeperatorLineProps {
  width?: string;
  widthTablet?: string;
  widthLaptop?: string;
  height?: string;
  backgroundColor?: string;

  display?: string;
  displayTablet?: string;
  displayLaptop?: string;
}

export const SeperatorLine = styled.div`
  display: ${(props: ISeperatorLineProps) => props.display || "block"};
  width: ${(props: ISeperatorLineProps) => props.width || "90%"};
  height: ${(props: ISeperatorLineProps) => props.height || "2px"};
  background-color: ${(props: ISeperatorLineProps) =>
    props.backgroundColor || "rgba(0, 0, 0, 0.25)"};

  @media ${device.tablet} {
    display: ${(props: ISeperatorLineProps) => props.displayTablet || ""};
    width: ${(props: ISeperatorLineProps) => props.widthTablet || ""};
  }
  @media ${device.laptop} {
    display: ${(props: ISeperatorLineProps) => props.displayLaptop || ""};
    width: ${(props: ISeperatorLineProps) => props.widthLaptop || ""};
  }
`;
