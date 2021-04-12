import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="blog__footer">
      <div className="blog__footer__div">
        <h1>Contactame ahora</h1>
        <NavLink to="/contact" className="btn__contact">
          CONTACTAR
        </NavLink>
      </div>
      <div className="blog__footer__div__copyrigth">
        <h3>&copy; Copyright 2021</h3>
      </div>
      <div className="blog__footer__div">
        <h1>Sigueme en redes</h1>
        <FaFacebookSquare className="blog__footer__social__media" />
        <FaInstagramSquare className="blog__footer__social__media" />
        <FaYoutubeSquare className="blog__footer__social__media" />
      </div>
    </footer>
  );
};
