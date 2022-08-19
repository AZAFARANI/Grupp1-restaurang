import styled from "styled-components";

interface IStyledInputText {
  corner?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const InputText = styled.input`
  color: ${(props: IStyledInputText) => props.color || "hsla(0, 0%, 100%, 1)"};
  border-radius: ${(props: IStyledInputText) => props.corner || "20px"};

  width: ${(props: IStyledInputText) => props.width || "600px"};
  height: ${(props: IStyledInputText) => props.height || "86px"};

  border: none;
  box-shadow: 0px 0px 6px 3px hsla(0, 0%, 0%, 0.25) inset;
`;
