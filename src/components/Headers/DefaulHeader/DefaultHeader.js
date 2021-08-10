//Packages
import React from "react"
import { FiMenu } from "react-icons/fi"
import { FaTimes } from "react-icons/fa"

//Styled Components
import { StyledHeader, StyledNav } from "./DefaultHeader.styles"

//Hooks
import useComponents from "../.."
import useDefaultHeader from "./hook"

const DefaultHeader = () => {
  const { useButtons } = useComponents()
  const { IconButton } = useButtons()

  const { showNavbar, handleShowNavbar } = useDefaultHeader()

  return (
    <StyledHeader>
      <StyledNav>
        <h1> Hello </h1>
        <IconButton onClick={handleShowNavbar} className="text-white">
          {!showNavbar ? (
            <FiMenu className="h-6 w-6" />
          ) : (
            <FaTimes className="h-6 w-6" />
          )}
        </IconButton>
      </StyledNav>
    </StyledHeader>
  )
}

export default DefaultHeader
