import React from "react";
import { Link } from "gatsby";
import { sparelax, link, active } from "./navsparelax.module.scss";

function Navsparelax() {
  return (
    <nav className={sparelax}>
      <Link to="/relaxspa" className={link} activeClassName={active}>
        Для всех
      </Link>
      <Link to="/relaxspa/woman" className={link} activeClassName={active}>
        Для женщин
      </Link>
      <Link to="/relaxspa/man" className={link} activeClassName={active}>
        Для мужчин
      </Link>
    </nav>
  );
}

export default Navsparelax;
