import { useState } from "react";
import { useHistory } from "react-router-dom";

const useDefaultHeader = () => {
  const history = useHistory();

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  const goToHome = () => {
    history.push("/");
    setShowNavbar(false);
  };

  return { showNavbar, handleShowNavbar, goToHome };
};

export default useDefaultHeader;
