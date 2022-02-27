import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  container,
  preview,
  img,
  servicelist,
  item,
  price_item,
  number,
  index,
  title,
  description,
  price_info,
  cost,
  time,
} from "./massagelist.module.scss";
import Certificate from "./certificate";
import Detail from "./detail";

import massage_data from "../../data/massage.json";

function Massagelist() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const image_url = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "massage" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                formats: [AVIF, WEBP, JPG]
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
                quality: 90
              )
            }
          }
        }
      }
    }
  `);

  return (
    <div className={container}>
      <div className={preview}>
        <StaticImage
          src="../../images/massage.png"
          alt="Услуги массажа"
          layout="fullWidth"
          className={img}
        />
        <p>Массаж</p>
      </div>
      <Certificate />
      <div className={servicelist}>
        {massage_data.map((data, i) => {
          return (
            <div key={`massage_detail${i}`}>
              {selected === i ? (
                <Detail
                  data={data}
                  imageSrc={image_url.allFile.edges[i].node}
                  close={() => setSelected(null)}
                />
              ) : (
                <div
                  className={item}
                  onClick={() => toggle(i)}
                  onKeyDown={() => toggle(i)}
                >
                  <div className={index}>
                    {i < 9 ? `0${i + 1}` : `${i + 1}`}
                  </div>
                  <div className={title}>
                    <h2>{data.title}</h2>
                  </div>
                  <div className={description}>
                    <p>{data.short_description}</p>
                  </div>
                  <div className={cost}>
                    <div className={price_item}>
                      <div className={number}>{data.short_cost.quantity}</div>
                      <div className={price_info}>
                        <p>{data.short_cost.price}</p>
                        <p className={time}>
                          <span>ВРЕМЯ: </span>
                          {data.short_cost.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Massagelist;
