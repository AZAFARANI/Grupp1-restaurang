import styled from "styled-components";

interface ISpanProps {
  fontType?: string;
  fontSize?: string;
  color?: string;
  shadow?: string;
}

export const CustomSpan = styled.span`
  color: ${(props: ISpanProps) => props.color || "black"};

  font-family: ${(props: ISpanProps) => props.fontType || "Sofia"};

  font-size: ${(props: ISpanProps) => props.fontSize || "12pt"};

  text-shadow: ${(props: ISpanProps) =>
    props.shadow || "0px 4px 4px hsla(0, 0%, 0%, 0.25)"};
`;
