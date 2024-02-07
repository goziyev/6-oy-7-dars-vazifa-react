import { useState } from "react";
import AccordionCard from "../accordion";
import style from "./index.module.css";
export default function Accordions() {

const array = [
  {
    title:"sao"
  },
  {
    title:"sao"
  },
  {
    title:"sao"
  }
]
  return (
    <>
      <div className={style.accardion}>
      

       {array.map((el,index) => {
         return (
          <AccordionCard  index={index} />
         )
       })}
       
       
       
       
       
       
       
        {/* <div className={style.item}>
          <p onClick={handleCLick} className={style.accardionTitle}>
            Accordion<span>{active ? "-" : "+"}</span>
          </p>
          <p className={active ? style.active : style.noActive}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            distinctio, molestiae id enim odit cum itaque sed quam suscipit
            perferendis magnam expedita vero, beatae illum.
          </p>
        </div> */}
      </div>
    </>
  );
}
