//Packages
import React from "react"
import PropTypes from "prop-types"

//Styled Components
import { StyledHyperlink } from "./AppLink.styles"

const AppLink = (props) => {
  const { children, className, href, target } = props
  return (
    <StyledHyperlink className={className} href={href} target={target}>
      {children}
    </StyledHyperlink>
  )
}

AppLink.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
}

AppLink.defaultProps = {
  className: "",
  href: "",
  target: "",
}

export default AppLink
