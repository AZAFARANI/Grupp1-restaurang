import styled from "styled-components";

interface IAprops {
  width?: string;
  height?: string;
  textDecoration?: string;
  color?: string;
  fontSize?: string;
  display?: string;

  justifyContent?: string;
}

export const A = styled.a`
  width: ${(props: IAprops) => props.width || "50%"};
  height: ${(props: IAprops) => props.height || "10vh"};
  text-decoration: ${(props: IAprops) => props.textDecoration || "none"};
  color: ${(props: IAprops) => props.color || "black"};
  display: ${(props: IAprops) => props.display || "flex"};
  justify-content: ${(props: IAprops) => props.justifyContent || "center"};
`;
