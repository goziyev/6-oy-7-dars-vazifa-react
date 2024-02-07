// AccordionCard.js
import style from "../accardions/index.module.css";
import { useState } from "react";

export default function AccordionCard({ index, activeIndex, setActiveIndex }) {
  const isActive = index === activeIndex;

  function handleCLick() {
    setActiveIndex(isActive ? null : index);
  }

  return (
    <div key={index} className={style.item}>
      <p onClick={handleCLick} className={style.accardionTitle}>
        Accordion<span>{isActive ? "-" : "+"}</span>
      </p>
      <p className={isActive ? style.active : style.noActive}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
        distinctio, molestiae id enim odit cum itaque sed quam suscipit
        perferendis magnam expedita vero, beatae illum.
      </p>
    </div>
  );
}
