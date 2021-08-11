import styled from "styled-components";
import tw from "twin.macro";

export const StyledHeader = styled.header.attrs({
  className: "StyledHeader",
})`
  ${tw`bg-primary-500 px-2`}
  ${(props) => props.showNavbar && tw`w-screen h-screen absolute`}
`;
export const StyledDiv = styled.div.attrs({
  className: "StyledDiv",
})`
  ${tw`container flex justify-between py-4 mx-auto`}
`;

export const SytledNavMobile = styled.nav.attrs({
  className: "SytledNavMobile",
})`
  ${tw``}
`;
