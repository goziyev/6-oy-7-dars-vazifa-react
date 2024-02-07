import { useState } from "react";
import style from "./index.module.css";
export default function Accordion() {
  const [active, setActive] = useState(false);

  function handleCLick(e) {
    setActive(!active);
    console.log(e);
  }
const array = [
  {
    title:"sao"
  },
  {
    title:"sao"
  },
  {
    title:"sao"
  },
  {
    title:"sao"
  },
  {
    title:"sao"
  },
  {
    title:"sao"
  },
]
  return (
    <>
      <div className={style.accardion}>
      

       {array.map((el,index) => {
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
