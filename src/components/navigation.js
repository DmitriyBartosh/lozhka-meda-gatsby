import React from "react";
import { Link } from "gatsby";
import { nav, link, active } from "./navigation.module.scss";

function Navigation() {
  return (
    <nav className={nav}>
      <Link to="/" className={link} activeClassName={active}>
        О нас
      </Link>
      <Link to="/massage" className={link} activeClassName={active}>
        Массаж
      </Link>
      <Link to="/relaxspa" className={link} activeClassName={active}>
        Relax & SPA
      </Link>
      <Link to="/certificate" className={link} activeClassName={active}>
        Подарочные сертификаты
      </Link>
      <Link to="/contact" className={link} activeClassName={active}>
        Контакты
      </Link>
    </nav>
  );
}

export default Navigation;
