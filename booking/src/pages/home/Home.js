import React from 'react'
import style from "./Home.module.css"

import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar'
function Home() {
  return (
   <div>
    <Navbar/>
    <Header type="list"/>
    </div>
  )
}

export default Home
