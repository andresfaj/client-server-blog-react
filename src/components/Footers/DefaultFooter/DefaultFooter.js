//Packages
import React from "react"
import PropTypes from "prop-types"

//Styled Components
import { StyledFooter } from "./DefaultFooter.styles"

const DefaultFooter = (props) => {
  const { className } = props
  return (
    <StyledFooter className={className}>
      <h1>This ia a Footer</h1>
    </StyledFooter>
  )
}

DefaultFooter.propTypes = {
  className: PropTypes.string,
}

export default DefaultFooter
