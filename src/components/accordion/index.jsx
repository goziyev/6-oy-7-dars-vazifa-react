import style from "../accardions/index.module.css";
import { useState } from "react";
export default function AccordionCard({ handleCLick, index }) {
  const [active, setActive] = useState(false);

  function handleCLick(e) {
    setActive(!active);
    console.log(e);
  }
  return (
    <div key={index} className={style.item}>
      <p onClick={handleCLick} className={style.accardionTitle}>
        Accordion<span>{active ? "-" : "+"}</span>
      </p>
      <p className={active ? style.active : style.noActive}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
        distinctio, molestiae id enim odit cum itaque sed quam suscipit
        perferendis magnam expedita vero, beatae illum.
      </p>
    </div>
  );
}
