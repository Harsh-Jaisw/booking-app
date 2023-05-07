import React from 'react'
import style from "./Navbar.module.css"
function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.navContainer}> 
        <span className={style.logo}>Yoyo Rooms</span>
        <div className={style.navItems}>
        <button className={style.navButton}>Register</button>
        <button className={style.navButton}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
