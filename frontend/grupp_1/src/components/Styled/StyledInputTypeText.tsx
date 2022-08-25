import styled from "styled-components";
import { device } from "./device/Responsive";

interface IStyledInputText {
  corner?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  widthTablet?: string;
}

export const InputText = styled.input`
  background-color: ${(props: IStyledInputText) =>
    props.color || "hsla(0, 0%, 100%, 1)"};
  border-radius: ${(props: IStyledInputText) => props.corner || "20px"};

  width: ${(props: IStyledInputText) => props.width || "600px"};
  height: ${(props: IStyledInputText) => props.height || "86px"};

  font-size: ${(props: IStyledInputText) => props.fontSize || "36px"};

  border: none;
  box-shadow: 0px 0px 6px 3px hsla(0, 0%, 0%, 0.25) inset;

  font-family: "Sofia";
  color: black;

  padding-left: 15px;
  padding-right: 5px;
  @media ${device.tablet} {
    width: ${(props: IStyledInputText) => props.widthTablet || "600px"};
  }
`;
