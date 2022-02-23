import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { container, preview, img } from "./service.module.scss";

function Massagelist() {
  return (
    <div className={container}>
      <div className={preview}>
        <StaticImage
          src="../../images/massage.png"
          alt="Услуги массажа"
          className={img}
        />
        <p>Массаж</p>
      </div>
    </div>
  );
}

export default Massagelist;
