import styled from "styled-components"
import tw from "twin.macro"

export const StyledFooter = styled.footer.attrs((props) => ({
  className: "StyledFooter",
}))`
  ${tw`mt-auto w-full bg-primary-500 text-center py-5`}
`

export const StyledP = styled.p.attrs({
  className: "StyledP",
})`
  ${tw`font-bold text-white`}
`
export const StyledSocialLinksWrapper = styled.div.attrs({
  className: "StyledSocialLinksWrapper",
})`
  ${tw`flex justify-center my-2`}
`
