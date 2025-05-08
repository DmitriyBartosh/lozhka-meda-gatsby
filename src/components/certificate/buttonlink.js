import React from "react";
import { Link } from "gatsby";
import * as styles from "./buttonlink.module.scss";
import { StaticImage } from "gatsby-plugin-image";

function Buttonlink() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          <span>Весенние скидки</span> на сертификаты
        </h2>
      </div>
      <div className={styles.subtitle}>скидки действуют до конца мая</div>
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
  );
}

export default Buttonlink;
