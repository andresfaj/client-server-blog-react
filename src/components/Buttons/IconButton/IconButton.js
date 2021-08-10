//Package
import React from "react"
import PropTypes from "prop-types"

//Styles Component
import { StyledIconButton } from "./IconButton.styles"

const IconButton = (props) => {
  const { children, className, onClick } = props
  return (
    <StyledIconButton className={className} onClick={onClick}>
      {children}
    </StyledIconButton>
  )
}

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

IconButton.defaultProps = {
  className: "",
  onClick: () => {},
}

export default IconButton
