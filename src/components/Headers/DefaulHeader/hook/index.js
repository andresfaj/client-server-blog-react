import { useState } from "react"

const useDefaultHeader = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => setShowNavbar(!showNavbar)

  return { showNavbar, handleShowNavbar }
}

export default useDefaultHeader
