import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { container, background, logo, title } from "./title.module.scss";

function Title() {
  return (
    <div className={container}>
      <div className={background}>
        <StaticImage
          src="../images/main.png"
          alt="Студия массажа Ложка меда"
          layout="fullWidth"
        />
      </div>
      <div className={logo}>
        <StaticImage
          src="../images/logo.png"
          alt="логотип Ложка меда студия массажа"
        />
      </div>
      <div className={title}>
        <h1>
          Все виды массажей | SPA лдя двоих
          <br />
          массаж лица | сертификаты
        </h1>
      </div>
    </div>
  );
}

export default Title;