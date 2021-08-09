// Packages
import PropTypes from "prop-types"
import React from "react"

//Hooks
import useComponents from "../../components"

const DefaultLayout = (props) => {
  const { children } = props

  const { useHeaders, useFooters } = useComponents()
  const { DefaultHeader } = useHeaders()
  const { DefaultFooter } = useFooters()

  return (
    <div className="h-screen">
      <DefaultHeader />
      {children}
      <DefaultFooter className="absolute bottom-0 w-full" />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element,
}

export default DefaultLayout
