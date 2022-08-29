import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IIconProps {
    color?: string;

    fontSize?: string;
    shadow?: string;
    zIndex?: string;
}

export const Icon = styled(FontAwesomeIcon)`
    color: ${(props: IIconProps) => props.color || "#cfc99b"};
    font-size: ${(props: IIconProps) => props.color || "39px"};
    text-shadow: ${(props: IIconProps) =>
        props.color || "0px 4px 4px hsla(0, 0%, 0%, 0.25)"};
    z-index: ${(props: IIconProps) => props.zIndex || "1"};
`;
