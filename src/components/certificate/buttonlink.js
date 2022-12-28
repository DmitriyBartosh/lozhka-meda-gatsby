import React from "react";
import { Link } from "gatsby";
import * as styles from "./buttonlink.module.scss";
import { StaticImage } from "gatsby-plugin-image";

function Buttonlink() {
  return (
    <div className={styles.container} id="certificatelink">
      <div className={styles.left}>
        <div className={styles.title}>
          <h2>
            <span>Скидка 10%</span> на все подарочные сертификаты
          </h2>
        </div>
        <div className={styles.subtitle}>скидка действует до 15 января</div>
        <div className={styles.description}>
          <p>
            Подарочный сертификат возможен на любую услугу или номинал. Выберите
            подходящий сертификат и оформите покупку онлайн.
          </p>
        </div>
        <Link to="/certificate" className={styles.link}>
          Приобрести
        </Link>
        <div className={styles.background}>
          <StaticImage
            src="../../images/certificate.jpg"
            alt="фон для сертификата"
            className={styles.gatsbyimg}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h2>Программа:</h2>
        <p>
          <span>Сеанс фитобочки кедровой</span> 15-20 минут
          <br />
          <br />
          <span>Массаж всего тела</span> 60 минут
          <br />
          <br />
          <span>Массаж стоп точечный</span> 20 минут
          <br />
          <br />
          <span>Травяной чай с ложкой меда</span>
        </p>
      </div>
    </div>
  );
}

export default Buttonlink;
