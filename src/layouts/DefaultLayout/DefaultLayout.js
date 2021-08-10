// Packages
import PropTypes from "prop-types"
import React from "react"

//Hooks
import useComponents from "../../components"

const socialLinks = [
  { id: 1, url: "https://www.facebook.com/naydujaramillo", name: "facebook" },
  {
    id: 2,
    url: "https://www.instagram.com/naydujaramillo/",
    name: "instagram",
  },
  {
    id: 3,
    url: "https://www.youtube.com/channel/UCUDhSKpUBFNlQhrbgUjKeRA",
    name: "youtube",
  },
]

const DefaultLayout = (props) => {
  const { children } = props

  const { useHeaders, useFooters } = useComponents()
  const { DefaultHeader } = useHeaders()
  const { DefaultFooter } = useFooters()

  return (
    <div className="h-screen">
      <DefaultHeader />
      {children}
      <DefaultFooter socialLinks={socialLinks} />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element,
}

export default DefaultLayout
