import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <header className="blog__header">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <nav>
        <NavLink exact to="/blog" className="btn">
          {' '}
          Blog{' '}
        </NavLink>
        <NavLink exact to="/workshops" className="btn">
          {' '}
          Cursos y Talleres{' '}
        </NavLink>
        <NavLink exact to="/aboutme" className="btn">
          {' '}
          Sobre mi{' '}
        </NavLink>
        <NavLink exact to="/contact" className="btn__contact">
          {' '}
          Contacto{' '}
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
