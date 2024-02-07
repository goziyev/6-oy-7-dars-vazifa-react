import { useState } from "react";

import style from "./index.module.css";
export default function Modal() {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }
  return (
    <>
      <div>
        <button onClick={handleModal} className={style.modalButton}>
          Modal
        </button>
        {modal && (
          <>
            <div className={style.modalCard}>
              <p className={style.modalDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste a
                doloremque natus delectus voluptatum dolorem voluptates mollitia
                dicta quis beatae, voluptas sed repudiandae corporis aliquid.
              </p>
              <div className={style.buttonWrapper}>
                <button onClick={handleModal} className={style.exit}>Exit</button>
                <button onClick={handleModal} className={style.agree}>Agree</button>
              </div>
            </div>
            <div onClick={handleModal} className={style.modalBackground}></div>
          </>
        )}
      </div>
    </>
  );
}
