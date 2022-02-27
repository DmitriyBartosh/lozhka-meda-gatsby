import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoClose } from "react-icons/io5";
import { useWindowSize } from "react-use";
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
import "swiper/css";

function Detail({ data, imageSrc, close }) {
  const { width } = useWindowSize();
  const imgSrc = getImage(imageSrc);

  return (
    <div className={detail}>
      <button className={closeBtn} onClick={close}>
        <IoClose />
      </button>
      <div className={block}>
        <div className={left}>
          <h2>{data.title}</h2>
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
          <Swiper
            slidesPerView={width > 600 ? 2.5 : 1.75}
            spaceBetween={10}
            grabCursor={true}
            className={price}
          >
            {data.cost.map((item) => {
              const { price, time, quantity } = item;

              return (
                <SwiperSlide key={`detail_${data.title}`} className={order}>
                  <div className={orderInfo}>
                    <p>
                      {quantity} / {price} руб.
                    </p>
                    <p>{time}</p>
                  </div>
                  <button>Забронировать</button>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            className={included}
            dangerouslySetInnerHTML={{ __html: data.programm }}
          />
        </div>
      </div>
      {data.description && (
        <div
          className={programm}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      )}
    </div>
  );
}

export default Detail;
