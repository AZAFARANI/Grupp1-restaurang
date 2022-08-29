import styled from "styled-components";
import { device } from "./device/Responsive";

interface IDiv {
    height?: string;
    width?: string;
    flexDirection?: string;
    gap?: string;
    justifyContent?: string;
    alignItems?: string;
    backgroundImage?: string;
    backgroundColor?: string;
    padding?: string;

    tabletWidth?: string;
    laptopWidth?: string;
    desktopWidth?: string;
}

export const Div = styled.div`
    height: ${(props: IDiv) => props.height || "100%"};
    width: ${(props: IDiv) => props.width || "100%"};

    display: flex;
    flex-direction: ${(props: IDiv) => props.flexDirection || "column"};
    justify-content: ${(props: IDiv) => props.justifyContent || "space-around"};
    align-items: ${(props: IDiv) => props.alignItems || "center"};
    gap: ${(props: IDiv) => props.gap || "0px"};

    background-image: ${(props: IDiv) => props.backgroundImage || "none"};
    background-color: ${(props: IDiv) => props.backgroundColor || "none"};
    background-position: center;
    background-size: cover;

    padding: ${(props: IDiv) => props.padding || "0px"};

    @media ${device.tablet} {
        width: ${(props: IDiv) => props.tabletWidth || "none"};
    }

    @media ${device.laptop} {
        width: ${(props: IDiv) => props.laptopWidth || "none"};
    }

    @media ${device.desktop} {
        width: ${(props: IDiv) => props.desktopWidth || "none"};
    }
`;
