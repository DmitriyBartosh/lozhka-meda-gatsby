import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./promocard.module.scss";

function Promocard() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Карта лояльности</h2>
      </div>
      <div className={styles.subtitle}>с кешбэком 5%</div>
      <div className={styles.description}>
        <p>
          Получайте 5% кешбэка бонусами с каждой оплаты и используйте их как
          скидку на следующие визиты. При активации карты — 500 приветственных
          баллов.
        </p>
      </div>
      <a
        href="https://api.wahelp.cards/api/v1/lk/28x26"
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        Активировать карту
      </a>
      <div className={styles.background}>
        <StaticImage
          src="../images/promo.jpg"
          alt="фон для сертификата"
          className={styles.gatsbyimg}
        />
      </div>
    </div>
  );
}

export default Promocard;
