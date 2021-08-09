import React from "react"
import PropTypes from "prop-types"

const DefaultFooter = (props) => {
  const { className } = props
  return <div className={className}>Default Footer</div>
}

DefaultFooter.propTypes = {
  className: PropTypes.string,
}

export default DefaultFooter
