import styled from "styled-components";
import { device } from "./device/Responsive";

interface IStyledButtonProps {
  color?: string;
  background?: string;
  padding?: string;
  paddingTablet?: string;
  paddingDesktop?: string;
}

export const Button = styled.button`
  color: ${(props: IStyledButtonProps) => props.color || "white"};
  padding: ${(props: IStyledButtonProps) => props.padding || "5px 10px"};
  background-color: ${(props: IStyledButtonProps) =>
    props.background || "hsla(0, 14%, 82%, 1)"};

  border-width: 2px 0px 0px 2px;
  border-style: solid;
  border-color: #d8cbcb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  cursor: pointer;

  border-radius: 10px;

  font-family: "Sofia";

  :hover {
    transform: scale(110%);
  }

  @media ${device.tablet} {
    padding: ${(props: IStyledButtonProps) =>
      props.paddingTablet || "10px 50px"};
  }

  @media ${device.desktop} {
    padding: ${(props: IStyledButtonProps) =>
      props.paddingDesktop || "10px 40px"};
  }
`;
