import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  preview,
  img,
  servicelist,
  item,
  price_item,
  number,
  index,
  title,
  description,
  info,
  cost,
  price,
  time,
} from "./massagelist.module.scss";
import Detail from "./detail";

function Massagelist() {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className={container} onClick={() => setIsDetail(true)}>
      <div className={preview}>
        <StaticImage
          src="../../images/massage.png"
          alt="Услуги массажа"
          layout="fullWidth"
          className={img}
        />
        <p>Массаж</p>
      </div>
      <div className={servicelist}>
        {isDetail ? (
          <Detail title="МАССАЖ ТАЕЖНАЯ СКАЗКА" />
        ) : (
          <div className={item}>
            <div className={index}>01</div>
            <div className={title}>
              <h2>МАССАЖ ТАЕЖНАЯ СКАЗКА</h2>
            </div>
            <div className={description}>
              <p>
                Эффект массажа после фитобочки возрастает в 2 раза Программа
                рассчитана на 1 человека
              </p>
            </div>
            <div className={info}>
              <div className={cost}>
                <div className={price_item}>
                  <div className={number}>1</div>
                  <p className={price}>1200р.</p>
                </div>

                <div className={time}>
                  <p>ВРЕМЯ: 1 час</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Massagelist;
