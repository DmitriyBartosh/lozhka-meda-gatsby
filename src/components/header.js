import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useWindowScroll } from "react-use";
import { IoLogoInstagram, IoLogoVk } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";
import {
  container,
  link,
  hideLink,
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
    if (y < positionY) {
      setShowHeader(true);
      setPositionY(y);
    } else {
      setShowHeader(false);
      setPositionY(y);
    }
  }, [y]);

  return (
    <div className={container}>
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
          href="https://www.instagram.com/studio_massage_/"
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          <IoLogoInstagram />
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
    </div>
  );
}

export default Header;
