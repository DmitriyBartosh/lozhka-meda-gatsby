import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  detail,
  left,
  right,
  block,
  img,
  price,
  closeBtn,
  order,
  orderInfo,
  included,
  programm,
} from "./detail.module.scss";

function Detail({ data, imageSrc }) {
  const imgSrc = getImage(imageSrc);

  return (
    <div className={detail}>
      <div className={closeBtn}></div>
      <div className={block}>
        <div className={left}>
          <GatsbyImage
            image={imgSrc}
            alt={data.title}
            className={img}
            layout="fullWidth"
            objectFit="cover"
          />
        </div>
        <div className={right}>
          <h2>{data.title}</h2>
          <div className={price}>
            {data.cost.map((item) => {
              const { price, time, quantity } = item;

              return (
                <div className={order} key={`detail_${data.title}`}>
                  <div className={orderInfo}>
                    <p>
                      {quantity} / {price} руб.
                    </p>
                    <p>{time}</p>
                  </div>
                  <button>Забронировать</button>
                </div>
              );
            })}
          </div>
          <div
            className={included}
            dangerouslySetInnerHTML={{ __html: data.included }}
          />
        </div>
      </div>
      <div
        className={programm}
        dangerouslySetInnerHTML={{ __html: data.aboutprogramm }}
      />
    </div>
  );
}

export default Detail;
