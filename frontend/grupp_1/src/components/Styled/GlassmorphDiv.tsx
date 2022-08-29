import styled from "styled-components";
import { device } from "./device/Responsive";

interface IGlassMorphProps {
  background?: string;
  blur?: string;
  border?: string;
  padding?: string;
  boxshadow?: string;
  borderradius?: string;
}

interface ICustomProps {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  position?: string;
  alignItems?: string;
  border?: string;
  height?: string;
  width?: string;
  background?: string;
  padding?: string;
  paddingTop?: string;
  backgroundImage?: string;
  applyToNthChild?: string;
  marginBottom?: string;
  heightTablet?: string;
  paddingTopDesktop?: string;
  paddingTopTablet?: string;
  marginBottomTablet?: string;
  justifyContentTablet?: string;
  flexDirectionTablet?: string;
  applyToNthChildTable?: string;
  alignItemsTablet?: string;
  widthTablet?: string;
  backgroundDesktop?: string;
  widthDesktop?: string;
  heightDekstop?: string;
  flexDirectionDesktop?: string;
  justifyContentDesktop?: string;
}

interface ISettingsProp {
  display?: String;
}

interface ITestProps {
  desktop?: ISettingsProp;
  tablet?: ISettingsProp;
  mobile?: ISettingsProp;
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

export const HeroDiv = styled.div`
  display: ${(props: ICustomProps) => props.display || "flex"};
  justify-content: ${(props: ICustomProps) => props.justifyContent || "center"};
  align-items: ${(props: ICustomProps) => props.alignItems || "center"};
  flex-direction: ${(props: ICustomProps) => props.flexDirection || "column"};
  width: ${(props: ICustomProps) => props.width || "100%"};
  background-image: ${(props: ICustomProps) => props.backgroundImage || "none"};
  background-size: cover;
`;

export const HeaderDiv = styled(HeroDiv)`
  padding: ${(props: ICustomProps) => props.padding || "10px"};
  background-color: ${(props: ICustomProps) =>
    props.background || "rgba(255, 255, 255, 0.75)"};
  @media ${device.tablet} {
    justify-content: ${(props: ICustomProps) =>
      props.justifyContentTablet || "center"};
  }
  @media ${device.desktop} {
    background-color: ${(props: ICustomProps) =>
      props.backgroundDesktop || "none"};
    width: ${(props: ICustomProps) => props.widthDesktop || "100%"};
    height: ${(props: ICustomProps) => props.heightDekstop || "100%"};
  }
`;

export const ContainerDiv = styled(HeroDiv)`
  padding-top: ${(props: ICustomProps) => props.paddingTop || "20px"};
  background-color: ${(props: ICustomProps) =>
    props.background || "rgba(255, 255, 255, 0.75)"};
  @media ${device.tablet} {
    padding-top: ${(props: ICustomProps) => props.paddingTopTablet || "20px"};
    width: ${(props: ICustomProps) => props.widthTablet || "100%"};
  }
  @media ${device.desktop} {
    padding-top: ${(props: ICustomProps) => props.paddingTopDesktop || "20px"};
    width: ${(props: ICustomProps) => props.widthDesktop || "100%"};
  }
`;

export const SeperatorLine = styled.div`
  width: ${(props: ICustomProps) => props.width || "90%"};
  height: ${(props: ICustomProps) => props.height || "2px"};
  background-color: ${(props: ICustomProps) =>
    props.background || "rgba(0, 0, 0, 0.25)"};
`;

export const GlassDiv2 = styled(GlassDiv)`
  height: 70vh;
  width: 95%;
`;

export const CustomSpanDiv = styled.div`
  display: ${(props: ICustomProps) => props.display || "flex"};
  justify-content: ${(props: ICustomProps) => props.justifyContent || "center"};
  align-items: ${(props: ICustomProps) => props.alignItems || "center"};
  width: ${(props: ICustomProps) => props.width || "100%"};
  flex-direction: ${(props: ICustomProps) => props.flexDirection || "column"};
  & > :nth-child(${(props: ICustomProps) => props.applyToNthChild || 0}) {
    margin: 0 0 35px 0;
  }
  margin-bottom: ${(props: ICustomProps) => props.marginBottom || "0px"};
  @media ${device.tablet} {
    flex-direction: ${(props: ICustomProps) =>
      props.flexDirectionTablet || "row"};
    width: ${(props: ICustomProps) => props.widthTablet || "100%"};
    margin-bottom: ${(props: ICustomProps) =>
      props.marginBottomTablet || "0px"};
    &
      > :nth-child(${(props: ICustomProps) =>
          props.applyToNthChildTable || 0}) {
      margin: 0 0 35px 0;
    }
  }

  @media ${device.desktop} {
    flex-direction: ${(props: ICustomProps) =>
      props.flexDirectionDesktop || "column"};
    width: ${(props: ICustomProps) => props.widthDesktop || "100%"};
  }
`;

export const ButtonContainerDiv = styled.div`
  display: ${(props: ICustomProps) => props.display || "flex"};
  justify-content: ${(props: ICustomProps) => props.justifyContent || "center"};
  align-items: ${(props: ICustomProps) => props.alignItems || "center"};
  flex-direction: ${(props: ICustomProps) => props.flexDirection || "column"};
  width: ${(props: ICustomProps) => props.width || "100%"};

  @media ${device.desktop} {
    align-items: ${(props: ICustomProps) =>
      props.justifyContentDesktop || "center"};
  }
`;

export const TextContainerDiv = styled.div`
  display: ${(props: ICustomProps) => props.display || "flex"};
  justify-content: ${(props: ICustomProps) => props.justifyContent || "center"};
  align-items: ${(props: ICustomProps) => props.alignItems || "center"};
  flex-direction: ${(props: ICustomProps) => props.flexDirection || "column"};
  width: ${(props: ICustomProps) => props.width || "100%"};
`;

export const FormStepDiv = styled.div`
  display: ${(props: ICustomProps) => props.display || "flex"};
  align-items: ${(props: ICustomProps) => props.alignItems || "center"};
  flex-direction: ${(props: ICustomProps) => props.flexDirection || "column"};
  width: ${(props: ICustomProps) => props.width || "100%"};
  height: ${(props: ICustomProps) => props.height || "1000px"};

  & > :nth-child(${(props: ICustomProps) => props.applyToNthChild || 0}) {
    margin: 0 0 35px 0;
  }
  @media ${device.tablet} {
    height: ${(props: ICustomProps) => props.heightTablet || "800px"};
  }

  @media ${device.desktop} {
    height: ${(props: ICustomProps) => props.heightDekstop || "650px"};
  }
`;
