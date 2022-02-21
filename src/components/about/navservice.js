import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { container, card, backimage, photo } from "./navservice.module.scss";
import { Link } from "gatsby";

function Navservice() {
  return (
    <div className={container}>
      <Link to="/massage" className={card}>
        <div className={backimage}>
          <StaticImage
            src="../../images/massage.png"
            alt="Услуги массажа"
            layout="fullWidth"
            className={photo}
          />
        </div>
        <p>Массаж</p>
      </Link>
      <Link to="/relaxspa" className={card}>
        <div className={backimage}>
          <StaticImage
            src="../../images/spa.jpeg"
            alt="Услуги спа и релакс программы"
            layout="fullWidth"
            className={photo}
          />
        </div>
        <p>Relax & SPA программы</p>
      </Link>
    </div>
  );
}

export default Navservice;
