import styled from "styled-components";

interface IGlassMorphProps {
  background?: string;
  blur?: string;
  border?: string;
}

export const GlassDiv = styled.div`
  background-color: ${(props: IGlassMorphProps) =>
    props.background || "hsla( 255, 255, 255, 0.45 )"};

  backdrop-filter: ${(props: IGlassMorphProps) => props.blur || "blur(6px)"};
  -webkit-backdrop-filter: ${(props: IGlassMorphProps) => props.blur};

  border: ${(props: IGlassMorphProps) =>
    props.border || "border: 1px solid hsla( 255, 255, 255, 0.18 )"};

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  border-radius: 10px;
`;
