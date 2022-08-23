import styled from "styled-components";

interface IGlassMorphProps {
  background?: string;
  blur?: string;
  border?: string;
  padding?: string;
  boxshadow?: string;
  borderradius?: string;
}

export const GlassDiv = styled.div`
  background-color: ${(props: IGlassMorphProps) =>
    props.background || "hsla( 255, 255, 255, 0.45 )"};

  backdrop-filter: ${(props: IGlassMorphProps) => props.blur || "blur(6px)"};
  -webkit-backdrop-filter: ${(props: IGlassMorphProps) => props.blur};

  border: ${(props: IGlassMorphProps) =>
    props.border || "1px solid hsla( 255, 255, 255, 0.18 )"};

  padding: ${(props: IGlassMorphProps) => props.padding || "20px 20px"};

  box-shadow: ${(props: IGlassMorphProps) =>
    props.boxshadow || "0 8px 32px 0 rgba(31, 38, 135, 0.37)"};

  border-radius: ${(props: IGlassMorphProps) => props.borderradius || "10px"};
`;

export const GlassDiv2 = styled(GlassDiv)`
  height: 70vh;
  width: 95%;
`;
