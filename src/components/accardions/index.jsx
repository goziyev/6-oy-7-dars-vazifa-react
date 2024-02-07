// Accordions.js
import { useState } from "react";
import AccordionCard from "../accordion";
import style from "./index.module.css";

export default function Accordions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const array = [
    { title: "sao" },
    { title: "sao" },
    { title: "sao" }
  ];

  return (
    <>
      <div className={style.accardion}>
        {array.map((el, index) => (
          <AccordionCard
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </>
  );
}
