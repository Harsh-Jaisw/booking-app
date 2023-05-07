import React from 'react'
import style from "./GuestLove.module.css"
import {BsCurrencyRupee} from "react-icons/bs"
function GuestLove() {
  return (
    <div className={style.fp}>
        <div className={style.fpItem}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className={style.fpImg} />
       <span className={style.fpname}>Aparthotel Stare Miasto</span>
       <span className={style.fpCity}>Old Town</span>
       <span className={style.fpPrice}>Starting from <BsCurrencyRupee/> 10,560</span> 
        <div className={style.fpRating}>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className={style.fpItem}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className={style.fpImg}/>
       <span className={style.fpname}>Aparthotel Stare Miasto</span>
       <span className={style.fpCity}>Old Town</span>
       <span className={style.fpPrice}>Starting from <BsCurrencyRupee/> 10,560</span> 
        <div className={style.fpRating}>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className={style.fpItem}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=" alt="" className={style.fpImg} />
       <span className={style.fpname}>Aparthotel Stare Miasto</span>
       <span className={style.fpCity}>Old Town</span>
       <span className={style.fpPrice}>Starting from <BsCurrencyRupee/> 10,560</span> 
        <div className={style.fpRating}>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className={style.fpItem}>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=" alt="" className={style.fpImg} />
       <span className={style.fpname}>Aparthotel Stare Miasto</span>
       <span className={style.fpCity}>Old Town</span>
       <span className={style.fpPrice}>Starting from <BsCurrencyRupee/> 10,560</span> 
        <div className={style.fpRating}>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default GuestLove
