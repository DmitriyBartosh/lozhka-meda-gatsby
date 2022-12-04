import React from "react";
import {
  container,
  left,
  center,
  right,
  heycoddes,
} from "./footer.module.scss";

function Footer() {
  return (
    <footer className={container}>
      <div className={left}>
        <p>
          Красноярск, Парижской коммуны, 39а
          <br />
          оф 304 (3 этаж)
          <br />
          ост Парижской Коммуны
        </p>
      </div>
      <div className={center}>
        <p>
          ИП Арсентьева Анна Георгиевна
          <br />
          ИНН 246217174251
          <br />
          ОГРНИП 3192466800145586
        </p>
      </div>
      <div className={right}>
        <p>
          Телефон: <a href="tel:+79676127339">+7 (967) 612-73-39</a> <br />
          <a href="tel:+73912712128">+7 (391) 271-21-28</a>
        </p>
        <p className={heycoddes}>
          Сайт создан командой{" "}
          <a href="https://heycoddes.ru/" target="_blank" rel="noreferrer">
            Hey!Coddes
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
