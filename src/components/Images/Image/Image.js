//Packages
import React from "react"
import PropTypes from "prop-types"

//Styled Components
import { StyledImage } from "./Image.styles"

const Image = (props) => {
  const { src, alt, onClick, className } = props

  return (
    <StyledImage src={src} alt={alt} onClick={onClick} className={className} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

Image.defaultProps = {
  onClick: () => {},
  className: "",
}

export default Image
