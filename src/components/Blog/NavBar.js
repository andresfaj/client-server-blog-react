import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaFacebook, FaInstagram, FaYoutube, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = (close = true) => {
    close ? setMenuOpen(!menuOpen) : setMenuOpen(close);
  };

  return (
    <header className={`blog__header ${menuOpen ? 'menu-active' : ''}`}>
      <section className="blog__header_s1">
        <Link onClick={() => handleMenu(false)} to="/">
          <img src={logo} alt="logo" />
        </Link>
        {menuOpen ? (
          <AiOutlineClose
            onClick={handleMenu}
            className="blog__header_s1_menu-icon"
          />
        ) : (
          <FaBars onClick={handleMenu} className="blog__header_s1_menu-icon" />
        )}
      </section>
      <nav>
        <section className="blog__header_s2">
          <NavLink
            exact
            to="/blog"
            className="btn"
            activeClassName="blog__header__btn__active"
            onClick={() => handleMenu(false)}
          >
            {' '}
            Blog{' '}
          </NavLink>
          <NavLink
            exact
            to="/workshops"
            className="btn"
            activeClassName="blog__header__btn__active"
            onClick={() => handleMenu(false)}
          >
            {' '}
            Cursos y Talleres{' '}
          </NavLink>
          <NavLink
            exact
            to="/aboutme"
            className="btn"
            activeClassName="blog__header__btn__active"
            onClick={() => handleMenu(false)}
          >
            {' '}
            Sobre mi{' '}
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="btn__contact"
            onClick={() => handleMenu(false)}
          >
            {' '}
            Contacto{' '}
          </NavLink>
        </section>
      </nav>
      <section className="blog__header_s3">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/naydujaramillo"
        >
          <FaFacebook className="blog__header_s3_socialm" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/naydujaramillo/"
        >
          <FaInstagram className="blog__header_s3_socialm" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCUDhSKpUBFNlQhrbgUjKeRA"
        >
          <FaYoutube className="blog__header_s3_socialm" />
        </a>
      </section>
    </header>
  );
};

export default NavBar;
