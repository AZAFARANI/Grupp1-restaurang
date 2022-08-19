import styled from "styled-components";

interface IStyledButtonProps {
  color?: string;
  background?: string;
  padding?: string;
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

  border-radius: 10px;

  font-family: "Sofia";
`;
