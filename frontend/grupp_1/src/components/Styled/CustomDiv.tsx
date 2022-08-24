import styled from "styled-components";

interface Idiv {
  height?: string;
  width?: string;
  flexDirection?: string;
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundImage?: string;
}

export const CustomDiv = styled.div`
  height: ${(props: Idiv) => props.height || "100vh"};
  width: ${(props: Idiv) => props.width || "100%"};
  flex-direction: ${(props: Idiv) => props.flexDirection || "column"};
  justify-content: ${(props: Idiv) => props.justifyContent || "space-around"};
  align-items: ${(props: Idiv) => props.alignItems || "center"};
  gap: ${(props: Idiv) => props.gap || "10vh"};

  display: flex;

  background-image: ${(props: Idiv) =>
    props.backgroundImage || "url(/images/CapreseBackground.webp)"};
  background-position: center;
  background-size: cover;
`;

export const CustomDiv2 = styled(CustomDiv)``;