import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { IoCall, IoLogoVk } from "react-icons/io5";
import {
  container,
  background,
  logo,
  title,
  portrait,
  landscape,
  mobile,
  link,
} from "./title.module.scss";

function Title() {
  return (
    <div className={container}>
      <div className={background}>
        <StaticImage
          src="../images/main.png"
          alt="Студия массажа Ложка меда"
          placeholder="none"
          layout="fullWidth"
          className={landscape}
        />
        <StaticImage
          src="../images/mainmob.png"
          alt="Студия массажа Ложка меда"
          placeholder="none"
          layout="fullWidth"
          className={portrait}
        />
      </div>
      <Link className={logo} to="/">
        <StaticImage
          src="../images/logo.png"
          placeholder="none"
          alt="логотип Ложка меда студия массажа"
        />
      </Link>
      <div className={title}>
        <h1>
          Все виды массажей | SPA для двоих
          <br />
          массаж лица | сертификаты
        </h1>
      </div>
      <div className={mobile}>
        <a
          href="tel:+79631912128"
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          <IoCall />
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

      <a
        href="https://dikidi.net/396341"
        target="_tblank"
        className="onlinerecording"
      >
        Онлайн запись
      </a>
    </div>
  );
}

export default Title;
