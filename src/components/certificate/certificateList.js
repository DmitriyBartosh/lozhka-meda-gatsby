import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Form from "./form";
import {
  container,
  title,
  nominal,
  massage,
  relaxspaboth,
  relaxspaman,
  relaxspawoman,
  inputrange,
  info,
  desc,
  value,
  image,
  order,
  left,
  right,
  header,
  select,
  selectcontainer,
  btnservice,
  servicecontainer,
} from "./certificate.module.scss";
import { btn } from "../../style/other.module.scss";

import relaxspa_data from "../../data/relaxspa.json";
import massage_data from "../../data/massage.json";

function CertificateList() {
  const [nominalValue, setNominalValue] = useState("500");
  const [isShow, setIsShow] = useState(false);

  const [serviceChange, setServiceChange] = useState("");

  const handleService = (service) => {
    setServiceChange(service);
    setIsShow(true);
  };

  return (
    <div className={container}>
      {isShow && (
        <Form serviceInfo={serviceChange} closeForm={() => setIsShow(false)} />
      )}
      <div className={title}>
        <p>
          Ищите подарок для друга или подруги? Подарочный сертификат возможен на
          любую услугу или номинал в студию массажа и фитобочки «Ложка меда» -
          это идеальный вариант! Мастера высочайшего класса, удобное время
          работы. Выберите подходящий сертификат и оформите покупку онлайн.
        </p>
      </div>
      <div className={nominal}>
        <h2>Сертификат номинальный</h2>
        <p>
          Сертификат действует один раз до полного использования. Срок действия
          6 месяцев с даты выдачи; Возврату и обмену на денежные средства не
          подлежит, возможна передача третьим лицам. Сертификат отдается в
          электронном или печатном виде, после покупки с вами свяжется менеджер
          для уточнения всех вопросов.
        </p>
        <StaticImage
          src="../../images/certificate/nominal.jpg"
          alt="Сертификат массажная студия"
          layout="fullWidth"
          className={image}
        />
        <div className={inputrange}>
          <input
            type="range"
            min="500"
            max="25000"
            step="500"
            value={nominalValue}
            onChange={(e) => setNominalValue(e.target.value)}
          />
          <div className={info}>
            <p className={desc}>
              Подвиньте ползунок и выберите нужную сумму для приобретения
              сертификата
            </p>
            <p className={value}>{nominalValue} руб. / 25000 руб.</p>
          </div>
          <div className={order}>
            <button
              className={btn}
              onClick={() =>
                handleService(`Сертификат номинальный на ${nominalValue} руб.`)
              }
            >
              Приобрести сертификат
            </button>
          </div>
        </div>
      </div>
      <div className={massage}>
        <div className={header}>
          <h2>Сертификат на массаж</h2>
          <p>
            Сертификат действует один раз до полного использования. Срок
            действия 6 месяцев с даты выдачи; Возврату и обмену на денежные
            средства не подлежит, возможна передача третьим лицам. Сертификат
            отдается в электронном или печатном виде, после покупки с вами
            свяжется менеджер для уточнения всех вопросов.
          </p>
        </div>
        <div className={select}>
          <div className={left}>
            <h2>Выберите услугу</h2>
            <div className={selectcontainer}>
              {massage_data.map((item, i) => {
                const { title, cost } = item;

                return (
                  <>
                    <h3>{title}</h3>
                    <div className={servicecontainer}>
                      {cost.map((item) => {
                        return (
                          <button
                            className={btnservice}
                            onClick={() =>
                              handleService(
                                `${title} / ${item.price} руб. / ${item.time} / ${item.quantity}`
                              )
                            }
                          >
                            {`${item.price} руб.`}
                            <br />
                            {`${item.time}`}
                            <br />
                            {`${item.quantity}`}
                          </button>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={right}>
            <StaticImage
              src="../../images/certificate/massage.jpg"
              alt="Сертификат массажная студия"
              layout="fullWidth"
              className={image}
            />
          </div>
        </div>
      </div>
      <div className={relaxspaboth}>
        <div className={header}>
          <h2>
            Сертификат на Relax & SPA
            <br />
            для всех
          </h2>
          <p>
            Сертификат действует один раз до полного использования. Срок
            действия 6 месяцев с даты выдачи; Возврату и обмену на денежные
            средства не подлежит, возможна передача третьим лицам. Сертификат
            отдается в электронном или печатном виде, после покупки с вами
            свяжется менеджер для уточнения всех вопросов.
          </p>
        </div>
        <div className={select}>
          <div className={left}>
            <StaticImage
              src="../../images/certificate/relaxspa.jpg"
              alt="Сертификат массажная студия"
              layout="fullWidth"
              className={image}
            />
          </div>
          <div className={right}>
            <h2>Выберите услугу</h2>
            <div className={selectcontainer}>
              {relaxspa_data.both.map((item, i) => {
                const { title, cost } = item;

                return (
                  <>
                    <h3>{title}</h3>
                    <div className={servicecontainer}>
                      {cost.map((item) => {
                        return (
                          <button
                            className={btnservice}
                            onClick={() =>
                              handleService(
                                `${title} / ${item.price} руб. / ${item.time} / ${item.quantity}`
                              )
                            }
                          >
                            {`${item.price} руб.`}
                            <br />
                            {`${item.time}`}
                            <br />
                            {`${item.quantity}`}
                          </button>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={relaxspaman}>
        <div className={header}>
          <h2>
            Сертификат на Relax & SPA
            <br />
            для женщин
          </h2>
          <p>
            Сертификат действует один раз до полного использования. Срок
            действия 6 месяцев с даты выдачи; Возврату и обмену на денежные
            средства не подлежит, возможна передача третьим лицам. Сертификат
            отдается в электронном или печатном виде, после покупки с вами
            свяжется менеджер для уточнения всех вопросов.
          </p>
        </div>
        <div className={select}>
          <div className={left}>
            <h2>Выберите услугу</h2>
            <div className={selectcontainer}>
              {relaxspa_data.man.map((item, i) => {
                const { title, cost } = item;

                return (
                  <>
                    <h3>{title}</h3>
                    <div className={servicecontainer}>
                      {cost.map((item) => {
                        return (
                          <button
                            className={btnservice}
                            onClick={() =>
                              handleService(
                                `${title} / ${item.price} руб. / ${item.time} / ${item.quantity}`
                              )
                            }
                          >
                            {`${item.price} руб.`}
                            <br />
                            {`${item.time}`}
                            <br />
                            {`${item.quantity}`}
                          </button>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={right}>
            <StaticImage
              src="../../images/certificate/relaxspa.jpg"
              alt="Сертификат массажная студия"
              layout="fullWidth"
              className={image}
            />
          </div>
        </div>
      </div>
      <div className={relaxspawoman}>
        <div className={header}>
          <h2>
            Сертификат на Relax & SPA
            <br />
            для мужчин
          </h2>
          <p>
            Сертификат действует один раз до полного использования. Срок
            действия 6 месяцев с даты выдачи; Возврату и обмену на денежные
            средства не подлежит, возможна передача третьим лицам. Сертификат
            отдается в электронном или печатном виде, после покупки с вами
            свяжется менеджер для уточнения всех вопросов.
          </p>
        </div>
        <div className={select}>
          <div className={left}>
            <StaticImage
              src="../../images/certificate/relaxspa.jpg"
              alt="Сертификат массажная студия"
              layout="fullWidth"
              className={image}
            />
          </div>
          <div className={right}>
            <h2>Выберите услугу</h2>
            <div className={selectcontainer}>
              {massage_data.map((item, i) => {
                const { title, cost } = item;

                return (
                  <>
                    <h3>{title}</h3>
                    <div className={servicecontainer}>
                      {cost.map((item) => {
                        return (
                          <button
                            className={btnservice}
                            onClick={() =>
                              handleService(
                                `${title} / ${item.price} руб. / ${item.time} / ${item.quantity}`
                              )
                            }
                          >
                            {`${item.price} руб.`}
                            <br />
                            {`${item.time}`}
                            <br />
                            {`${item.quantity}`}
                          </button>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateList;
