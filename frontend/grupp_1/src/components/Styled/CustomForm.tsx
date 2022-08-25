import styled from "styled-components";
import { device } from "./device/Responsive";

interface IStyledFormProps {
  display?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  direction?: string;
  gap?: string;
  applyToNthChild?: string;
}

export const StyledForm = styled.form`
  display: ${(props: IStyledFormProps) => props.display || "flex"};
  align-items: ${(props: IStyledFormProps) => props.alignItems || "center"};
  flex-direction: ${(props: IStyledFormProps) => props.direction || "column"};
  width: ${(props: IStyledFormProps) => props.width || "100%"};
  height: ${(props: IStyledFormProps) => props.height || "1000px"};

  & > :nth-child(${(props: IStyledFormProps) => props.applyToNthChild || 0}) {
    margin: 0 0 35px 0;
  }
  @media ${device.tablet} {
    height: ${(props: IStyledFormProps) => props.height || "800px"};
  }

  @media ${device.desktop} {
    height: ${(props: IStyledFormProps) => props.height || "650px"};
  }
`;
