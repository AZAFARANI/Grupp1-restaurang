import styled from "styled-components";
import { device } from "./device/Responsive";

interface IStyledImageProps {
  width?: string;
  height?: string;
  display?: string;
  displayDesktop?: string;
}

export const StyledImage = styled.img`
  width: ${(props: IStyledImageProps) => props.width || "428px"};
  height: ${(props: IStyledImageProps) => props.height || "122px"};
  display: ${(props: IStyledImageProps) => props.display || "none"};

  @media ${device.desktop} {
    display: ${(props: IStyledImageProps) => props.displayDesktop || "block"};
  }
`;
