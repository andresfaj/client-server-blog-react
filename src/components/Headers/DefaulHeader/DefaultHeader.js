//Packages
import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

//Styled Components
import {
  StyledHeader,
  StyledDiv,
  SytledNavMobile,
} from "./DefaultHeader.styles";

//Hooks
import useComponents from "../..";
import useDefaultHeader from "./hook";

//Assets
import Logo from "../../../assets/logo.png";

const DefaultHeader = () => {
  const { useButtons, useImages } = useComponents();
  const { IconButton } = useButtons();
  const { Image } = useImages();

  const { showNavbar, handleShowNavbar, goToHome } = useDefaultHeader();

  return (
    <StyledHeader showNavbar={showNavbar}>
      <StyledDiv>
        <Image
          src={Logo}
          alt="Logo naydú jaramillo"
          className="h-6 w-6 cursor-pointer"
          onClick={goToHome}
        />
        <IconButton onClick={handleShowNavbar} className="text-white md:hidden">
          {!showNavbar ? (
            <FiMenu className="h-6 w-6" />
          ) : (
            <FaTimes className="h-6 w-6" />
          )}
        </IconButton>
      </StyledDiv>
      {showNavbar && (
        <SytledNavMobile>
          <h1>jejej</h1>
        </SytledNavMobile>
      )}
    </StyledHeader>
  );
};

export default DefaultHeader;
