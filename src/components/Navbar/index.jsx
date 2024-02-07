import {Outlet, Link } from "react-router-dom";
import style from './index.module.css'


export default function Header() {
  return (
      <>
      <nav className={style.navbar}>
          <ul className={style.ul}>
              <li className={style.li}>
                  <Link className={style.linkReact} to='/' >Accardion</Link>
              </li>
              <li>
                  <Link className={style.linkReact} to='/modal' >Modal</Link>
              </li>
              <li>
                  <Link className={style.linkReact} to='/carousel' >Carousel</Link>
              </li>
          </ul>
      </nav>
      <Outlet/>
      </>
    )
}
