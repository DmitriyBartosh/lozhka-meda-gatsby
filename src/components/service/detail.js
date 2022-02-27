import React, { useState, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoClose } from "react-icons/io5";
import { useWindowSize } from "react-use";
import Form from "../form";
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
  const detailRef = useRef();
  const [closeForm, setCloseForm] = useState(false);
  const [orderDetail, setOrderDetail] = useState("");
  const { width } = useWindowSize();
  const imgSrc = getImage(imageSrc);

  // Выбор палочки для эскимо
  const handleForm = (price, time, quantity) => {
    setOrderDetail(`${quantity}/ ${price} руб. / ${time}`);
    setCloseForm(true);
    detailRef.current.scrollTop = 0;
  };

  return (
    <div
      className={detail}
      ref={detailRef}
      style={{
        height: closeForm ? 550 : "auto",
        overflow: closeForm ? "hidden" : "initial",
      }}
    >
      {closeForm && (
        <Form
          serviceselect={data.title}
          orderDetail={orderDetail}
          closeForm={() => setCloseForm(false)}
        />
      )}
      <button className={closeBtn} onClick={close}>
        <span>закрыть</span>
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
            slidesPerView={width > 600 ? 2.2 : 1.6}
            spaceBetween={10}
            grabCursor={true}
            className={price}
          >
            {data.cost.map((item, i) => {
              const { price, time, quantity } = item;

              return (
                <SwiperSlide key={`detail_${i}`} className={order}>
                  <div className={orderInfo}>
                    <p>
                      {quantity} / {price} руб.
                    </p>
                    <p>{time}</p>
                  </div>
                  <button onClick={() => handleForm(price, time, quantity)}>
                    Забронировать
                  </button>
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
