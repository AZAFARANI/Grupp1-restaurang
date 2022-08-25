import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IMenuIconProps {
  position?: String;
}

export const MenuIcon = styled(FontAwesomeIcon)`
  color: #cfc99b;

  font-size: 39px;

  text-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.25);

  z-index: 2;
`;
