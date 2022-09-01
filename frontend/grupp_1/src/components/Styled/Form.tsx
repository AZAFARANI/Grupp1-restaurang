import styled from "styled-components";
import { device } from "./device/Responsive";

interface IFormProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;

  width?: string;
  height?: string;
  gap?: string;
  heightTablet?: string;
  heightDesktop?: string;

  applyToNthChild?: string;
  childMargin?: string;

  position?: string;
}

export const Form = styled.form`
  position: ${(props: IFormProps) => props.position || "relative"};
  display: ${(props: IFormProps) => props.display || "flex"};
  align-items: ${(props: IFormProps) => props.alignItems || "center"};
  flex-direction: ${(props: IFormProps) => props.flexDirection || "column"};
  justify-content: ${(props: IFormProps) =>
    props.justifyContent || "flex-start"};

  width: ${(props: IFormProps) => props.width || "100%"};
  height: ${(props: IFormProps) => props.height || "auto"};
  gap: ${(props: IFormProps) => props.gap || "0px"};

  /* @media ${device.tablet} {
        height: ${(props: IFormProps) => props.heightTablet || "800px"};
    }

    @media ${device.laptop} {
        height: ${(props: IFormProps) => props.heightDesktop || "650px"};
    } */
`;
