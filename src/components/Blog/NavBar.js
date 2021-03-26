import React from 'react';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <header className="blog__header">
      <img src={logo} alt="logo" />
      <nav>
        <button className="btn"> Blog </button>
        <button className="btn"> Cursos y Talleres </button>
        <button className="btn"> Sobre mi </button>
        <button className="btn__contact"> Contacto </button>
      </nav>
    </header>
  );
};

export default NavBar;
