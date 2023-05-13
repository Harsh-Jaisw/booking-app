import React,{useState} from "react";
import style from "./Hotel.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import {BsCurrencyRupee} from "react-icons/bs"
import MailList from "../../components/mailList/mailList"
import Footer from "../../components/footer/Footer" 
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"
import {AiFillCloseCircle} from "react-icons/ai"
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
function Hotel() {
  const location =useLocation()
  // I get the location and path as well in which i can get id via split method.
  console.log(location)

  const id=location.pathname.split("/")[2]
  const [slideInd,setSlideInd]=useState(0)
  const[open,setOpen]=useState(false)
  const {data,loading,error,reFetch}=useFetch(`/hotels/find/${id}`)
  console.log(data)
 
  function handleOpen(id){
   setSlideInd(id)
   setOpen(true)
  }
  function handleMove(direction){
     let newSlideInd
     if(direction === "l"){
     newSlideInd=slideInd===0 ? data.photos.length-1 : slideInd-1
  }else{
     newSlideInd=slideInd===data.photos.length-1 ? 0:slideInd+1       
  }
  setSlideInd(newSlideInd)
}
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "loading please wait" :
      <div className={style.hotelContainer}>
       {open &&  <div className={style.slider}>
       < AiFillCloseCircle className={style.close} onClick={()=>setOpen(false)}/>
       
        
        <div className={style.sliderWrapper}>
        <BsFillArrowLeftCircleFill className={style.arrow} onClick={()=>handleMove("l")}/>
          <img src={data.photos[slideInd]} alt="" className={style.sliderImg} />
          <BsFillArrowRightCircleFill className={style.arrow} onClick={()=>handleMove("r")}/>
        </div>
        
       
        </div>}
        <div className={style.hotelWrapper}>
          <button className={style.booknow}>Reserve</button>
          <h1 className={style.hotelTitle}>{data.name}</h1>
          <div className={style.hotelAddress}>
            {data.address}
          </div>
          <div className={style.hotelImages}>
            {data.photos?.map((item,i) => (
              <div className={style.hotelImgWrapper}>
                <img onClick={()=>handleOpen(i)} src={item} alt="" className={style.hotelImg} />
              </div>
            ))}
          </div>
          <div className={style.hotelDetails}>
            <div className={style.hotelDetailsTexts}>
              <h1 className={style.hotelTitle}> {data.title}</h1>
             <p className={style.hotelDesc}>{data.description}</p>
            </div>
            <div className={style.hotelDetailsPrice}>
              <h1>Property Highlights</h1>
              <span>There are more repeat guests here than most other properties.</span>
              <h2> <BsCurrencyRupee/><span></span></h2>
              <button>Reserve</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>}
    </div>
  );
}

export default Hotel;
