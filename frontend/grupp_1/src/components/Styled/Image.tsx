import styled from "styled-components";
import { device } from "./device/Responsive";

interface IImageProps {
  width?: string;
  height?: string;
  fontSize?: string;

  display?: string;
  displayTablet?: string;
  displayLaptop?: string;
  cursor?: string;

  padding?: string;
}

export const Image = styled.img`
  width: ${(props: IImageProps) => props.width || "100%"};
  height: ${(props: IImageProps) => props.height || "100%"};
  padding: ${(props: IImageProps) => props.padding || "0px"};
  cursor: ${(props: IImageProps) => props.cursor || "auto"};

  display: ${(props: IImageProps) => props.display || "block"};

  @media ${device.tablet} {
    display: ${(props: IImageProps) => props.displayTablet || ""};
  }
  @media ${device.laptop} {
    display: ${(props: IImageProps) => props.displayLaptop || ""};
  }
`;
