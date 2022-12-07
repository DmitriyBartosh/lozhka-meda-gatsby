import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useWindowScroll } from "react-use";
import { IoLogoVk, IoReorderThree } from "react-icons/io5";
import {
  header,
  link,
  burger,
  mobile,
  desktop,
  active,
} from "./header.module.scss";

function Header() {
  const { y } = useWindowScroll();
  const [positionY, setPositionY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (y < positionY || y === 0) {
      setShowHeader(true);
      setPositionY(y);
    } else {
      setShowHeader(false);
      setPositionY(y);
    }
    console.log("y: ", y);
    console.log("positionY: ", positionY);
  }, [y]);

  return (
    <nav className={header}>
      <div className={mobile}>
        <Link
          to="/"
          className={link}
          style={{ transform: !showHeader && "translateY(-60px)" }}
          activeClassName={active}
        >
          О нас
        </Link>
        <Link
          to="/massage"
          className={link}
          style={{ transform: !showHeader && "translateY(-60px)" }}
          activeClassName={active}
        >
          Массаж
        </Link>
        <Link
          to="/relaxspa"
          className={link}
          style={{ transform: !showHeader && "translateY(-60px)" }}
          activeClassName={active}
        >
          Relax & SPA
        </Link>
        <Link to="/contact" className={burger} activeClassName={active}>
          <IoReorderThree />
        </Link>
      </div>
      <div className={desktop}>
        <a
          href="tel:+79631912128"
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          +7 (963) 191 21-28
        </a>
        <a
          href="https://vk.com/fitochka24"
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          <IoLogoVk />
        </a>
      </div>
    </nav>
  );
}

export default Header;
