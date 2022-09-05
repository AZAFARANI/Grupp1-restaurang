import styled from "styled-components";
import { device } from "./device/Responsive";

interface IFormProps {
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    flexGrow?: string;

    width?: string;
    height?: string;
    gap?: string;
    heightTablet?: string;
    heightDesktop?: string;

    applyToNthChild?: string;
    childMargin?: string;

    position?: string;
    minHeight?: string;
    border?: string;
    padding?: string;
}

export const Form = styled.form`
    position: ${(props: IFormProps) => props.position || "relative"};
    display: ${(props: IFormProps) => props.display || "flex"};
    align-items: ${(props: IFormProps) => props.alignItems || "center"};
    flex-direction: ${(props: IFormProps) => props.flexDirection || "column"};
    justify-content: ${(props: IFormProps) =>
        props.justifyContent || "flex-start"};
    flex-grow: ${(props: IFormProps) => props.flexGrow || ""};

    width: ${(props: IFormProps) => props.width || "100%"};
    height: ${(props: IFormProps) => props.height || "auto"};
    gap: ${(props: IFormProps) => props.gap || "0px"};

    min-height: ${(props: IFormProps) => props.minHeight || ""};

    border: ${(props: IFormProps) => props.border || ""};
    transition: height 1s ease;

    padding: ${(props: IFormProps) => props.padding || ""};

    /* @media ${device.tablet} {
        height: ${(props: IFormProps) => props.heightTablet || "800px"};
    }

    @media ${device.laptop} {
        height: ${(props: IFormProps) => props.heightDesktop || "650px"};
    } */
`;
