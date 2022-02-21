import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { container, preview, video, info } from "./presentation.module.scss";

function Presentation() {
  return (
    <div className={container}>
      <MdOutlineExpandMore />
      <h2>О нас</h2>
      <p>
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
      </div>
      <div className={info}></div>
      <div className={info}></div>
    </div>
  );
}

export default Presentation;
