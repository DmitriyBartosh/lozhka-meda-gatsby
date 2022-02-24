import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { detail, left, right, block, img } from "./detail.module.scss";

function Detail({ title }) {
  return (
    <div className={detail}>
      <div className={block}>
        <div className={left}>
          <StaticImage
            src="../../images/massage.png"
            alt="Услуги массажа"
            layout="fullWidth"
            className={img}
          />
        </div>
        <div className={right}>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Detail;
