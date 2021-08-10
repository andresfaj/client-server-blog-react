//Packages
import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

//Styled Components
import {
  StyledFooter,
  StyledP,
  StyledSocialLinksWrapper,
} from "./DefaultFooter.styles"

//Hooks
import useHooks from "../../../hooks"
import useComponents from "../.."

const DefaultFooter = (props) => {
  const { className, socialLinks } = props

  const { useSocialIcons } = useHooks()
  const { useLinks } = useComponents()

  const { socialIconHash } = useSocialIcons()
  const { AppLink } = useLinks()

  return (
    <StyledFooter className={className}>
      {socialLinks && socialLinks.length > 0 && (
        <StyledSocialLinksWrapper>
          {_.map(socialLinks, (link) => {
            let SocialIcon = socialIconHash[link.name.toLowerCase()]
            return (
              <AppLink
                key={link.id}
                href={link.url}
                target="_blank"
                className="text-white"
              >
                <SocialIcon className="h-6 w-6" />
              </AppLink>
            )
          })}
        </StyledSocialLinksWrapper>
      )}
      <StyledP>Copyright &copy; 2021</StyledP>
    </StyledFooter>
  )
}

DefaultFooter.propTypes = {
  className: PropTypes.string,
  socialLinks: PropTypes.array,
}

DefaultFooter.defaultProps = {
  socialLinks: [],
}

export default DefaultFooter
