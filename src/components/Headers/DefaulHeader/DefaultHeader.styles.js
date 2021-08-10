import styled from "styled-components"
import tw from "twin.macro"

export const StyledHeader = styled.header.attrs({
  className: "StyledHeader",
})`
  ${tw`bg-primary-500 px-2`}
`
export const StyledNav = styled.nav.attrs({
  className: "StyledNav",
})`
  ${tw`container flex justify-between py-4 mx-auto`}
`
