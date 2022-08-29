import styled from "styled-components";

interface ISeperatorLineProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
}

export const SeperatorLine = styled.div`
    width: ${(props: ISeperatorLineProps) => props.width || "90%"};
    height: ${(props: ISeperatorLineProps) => props.height || "2px"};
    background-color: ${(props: ISeperatorLineProps) =>
        props.backgroundColor || "rgba(0, 0, 0, 0.25)"};
`;
