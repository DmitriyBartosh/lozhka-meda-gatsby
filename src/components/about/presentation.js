import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { btn } from "../../style/other.module.scss";
import {
  presentation,
  container,
  preview,
  video,
  photo,
  infoservice,
  infocertificate,
  scrolldown,
  left,
  right,
  backimgone,
  backimgtwo,
} from "./presentation.module.scss";

function Presentation() {
  return (
    <div className={presentation}>
      <StaticImage
        src="../../images/about/back1.png"
        alt="массаж"
        className={backimgone}
      />
      <div className={container}>
        <BsChevronDoubleDown className={scrolldown} />
        <h2>О нас</h2>
        <p style={{ textAlign: "center" }}>
          Студия основана в 2010 году, основой нашей деятельности является:
          массаж, фитобочка, релакс программы (спа), оздоровительные сеансы
          соляной комнаты. Все для того, чтобы человек жил в гармонии здорового
          тела, в здоровом физическом и душевном состоянии. Мы профессионально
          практикуем массажные техники различных видов.
        </p>
        <div className={preview}>
          <div className={video}>
            <video autoPlay muted loop playsInline>
              <source src="/video/1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={video}>
            <video autoPlay muted loop playsInline>
              <source src="/video/2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={video}>
            <video autoPlay muted loop playsInline>
              <source src="/video/3.mp4" type="video/mp4" />
            </video>
          </div>

          <StaticImage
            src="../../images/about/back2.png"
            alt="массаж png"
            className={backimgtwo}
          />
        </div>
        <div className={infoservice}>
          <StaticImage
            src="../../images/about/back2.png"
            alt="массаж png"
            className={backimgtwo}
          />
          <div className={left}>
            <div className={photo}>
              <StaticImage
                src="../../images/about/1.jpeg"
                alt="ложка меда массажная студия"
              />
            </div>
          </div>
          <div className={right}>
            <h3>
              Наша специализация:
              <br />
              оздоровление, релакс-программы
            </h3>
            <p>
              В нашей студии городского формата есть чудесные кедровые фитобочки
              с целебным влажным паром с использованием арома масел
              <br />
              <br />
              Вкусный травяной чай с традиционной ложкой меда Квалифицированные
              специалисты
            </p>
            <Link to="/relaxspa" className={btn}>
              Выбрать услугу
            </Link>
          </div>
        </div>
        <div className={infocertificate}>
          <div className={left}>
            <p>
              Есть возможность воспользоваться нашими программами одновременно
              вдвоем, с вашими близкими людьми, а также приобрести сертификаты
              на любую услугу или номинал
            </p>
            <Link to="certificate" className={btn}>
              Подарочные сертификаты
            </Link>
          </div>
          <div className={right}>
            <div className={photo}>
              <StaticImage
                src="../../images/about/2.JPG"
                alt="ложка меда массажная студия"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
