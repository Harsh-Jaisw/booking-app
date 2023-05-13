import React from 'react'
import style from "./Navbar.module.css"
import {AuthContext} from '../../context/AuthContext'
import {useContext} from 'react'
function Navbar() {
  const {user} = useContext(AuthContext)
  console.log(user,'hii')
  return (
    <div className={style.navbar}>
      <div className={style.navContainer}> 
        <span className={style.logo}>YoYo Rooms</span>
      {user? <p> Welcome, {user.username}</p>:<div className={style.navItems}>
        <button className={style.navButton}>Register</button>
        <button className={style.navButton}>Login</button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
