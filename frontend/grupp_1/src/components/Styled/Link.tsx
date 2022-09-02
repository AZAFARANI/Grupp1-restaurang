import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

interface ILinkProps {
  textDecoration?: string;
}

export const Link = styled(RouterLink)`
  text-decoration: ${(props: ILinkProps) => props.textDecoration || "none"};

  :hover {
    text-decoration: underline;
    text-decoration-color: white;
  }
`;
