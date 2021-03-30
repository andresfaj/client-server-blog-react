import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <header className="blog__header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink
          exact
          to="/blog"
          className="btn"
          activeClassName="blog__header__btn__active"
        >
          {' '}
          Blog{' '}
        </NavLink>
        <NavLink
          exact
          to="/workshops"
          className="btn"
          activeClassName="blog__header__btn__active"
        >
          {' '}
          Cursos y Talleres{' '}
        </NavLink>
        <NavLink
          exact
          to="/aboutme"
          className="btn"
          activeClassName="blog__header__btn__active"
        >
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
