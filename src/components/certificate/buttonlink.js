import React from "react";
import { Link } from "gatsby";
import * as styles from "./buttonlink.module.scss";
import { StaticImage } from "gatsby-plugin-image";

function Buttonlink() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          <h2>
            <span>Весенние скидки</span> на подарочные сертификаты
          </h2>
        </div>
        <div className={styles.subtitle}>скидка действует до 25 мая</div>
        <div className={styles.description}>
          <p>Выберите подходящий сертификат и оформите покупку онлайн.</p>
        </div>
        <Link to="/certificate" className={styles.link} id="certificatelink">
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
        <h2>Сертификаты со скидкой:</h2>
        <p>
          <span>Кокосовый рай</span> 2 часа
          <br />
          <br />
          <span>Таёжная сказка</span> 60 минут
          <br />
          <br />
          <span>Ягодка</span> 3 часа
          <br />
          <br />
          <span>Шоколадно-ванильный десерт</span> 3 часа
        </p>
      </div>
    </div>
  );
}

export default Buttonlink;
