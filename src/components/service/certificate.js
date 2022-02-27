import { Link } from "gatsby";
import React from "react";
import { container, btn } from "./certificate.module.scss";

function Certificate() {
  return (
    <div className={container}>
      <p>
        Здесь вы найдете массажные процедуры для себя и для своих близких, а
        также сможете приобрести сертификат на любую услугу.
      </p>
      <Link to="/certificate" className={btn}>
        Онлайн сертификаты
      </Link>
    </div>
  );
}

export default Certificate;
