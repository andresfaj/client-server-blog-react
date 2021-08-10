// Packages
import PropTypes from "prop-types"
import React from "react"

//Hooks
import useComponents from "../../components"

const navLinks = [
  { id: 1, name: "Inicio" },
  { id: 2, name: "Blog" },
  { id: 3, name: "Cursos y talleres" },
  { id: 4, name: "Sobre mi" },
  { id: 5, name: "Contáctame" },
]

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
      <DefaultHeader navLinks={navLinks} />
      {children}
      <DefaultFooter socialLinks={socialLinks} />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element,
}

export default DefaultLayout
