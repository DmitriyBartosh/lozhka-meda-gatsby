import React from "react";
import { IoLogoInstagram, IoLogoVk } from "react-icons/io5";
import { container, link } from "./header.module.scss";

function Header() {
  return (
    <div className={container}>
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
  );
}

export default Header;
