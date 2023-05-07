import React, { useState } from "react";
import style from "./Header.module.css";
import { GiBed } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { BsFillCarFrontFill, BsFillTaxiFrontFill } from "react-icons/bs";
import {DateRange} from "react-date-range"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
function Header({type}) {
  const [open,setOpen]=useState(false)
    const [date,setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:"selection"
        }
    ])
    const [openOptions,setOpenOptions]=useState(false)
    const[options,setOptions]=useState({
      adult:1,
      children:0,
      room:1
    })
    function handleOption(name,operation){
      setOptions(prev=>{
        return {
          ...prev ,[name]:operation ==="i" ?options[name]+1:options[name]-1 
        }
      })
    }
  return (
    <div className={style.header}>
      <div className={type!=="list" ? style.headerContainer.listMode :style.headerContainer}>
        <div className={style.headerList}>
          <div className={`${style.headerListItem} ${style.active}`}>
            <GiBed />
            <span>Stays</span>
          </div>
          <div className={style.headerListItem}>
            <RiFlightTakeoffFill />
            <span>Flights</span>
          </div>
          <div className={style.headerListItem}>
            <BsFillCarFrontFill />
            <span>Car Rentals</span>
          </div>
          <div className={style.headerListItem}>
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className={style.headerListItem}>
            <BsFillTaxiFrontFill />
            <span>Taxis</span>
          </div>
        </div>
       {type=="list" &&
        <> <h1 className={style.headerTitle}>
          Over 157,000 hotels and homes across 35 countries
        </h1>
        <p className={style.headerDesc}>
          Get a 20% discount on your first booking.
        </p>
        <button className={style.headerBtn}>Login/SignUp</button>
        <div className={style.headerSearch}>
          <div className={style.headerSearchItem}>
            <input
              type="text"
              className={style.headerSearchInput}
              placeholder="Search by city or hotel"
            /></div>
          <div className={style.headerSearchItem}>
            <span onClick={()=>setOpen(!open)} className={style.headerSearchText}>
                {`${format(date[0].startDate,"dd/MM/yyyy")} - ${format(date[0].endDate,"dd/MM/yyyy")} `}
            </span>
            {open && <DateRange
              editableDateInputs={true}
              onChange={(item)=>setDate([item.selection])}
              ranges={date}
              className={style.date}
            />}
          </div>
          <div className={style.headerSearchItem}>
          <span onClick={()=>setOpenOptions(!openOptions)} className={style.headerSearchText}>
                {`${options.adult} adult, ${options.children} children, ${options.room} room`}
            </span>
            
            {openOptions && <div  className={style.options}>
              <div className={style.optionItem}>
                <span className={style.optionText}>Adult</span>
                <div className={style.optionCounter}>

                <button disabled={options.adult<=1} className={style.optionCounterButton} onClick={()=>handleOption("adult","d")}>-</button>
                <span className={style.optionCounterNumber}>{options.adult}</span>
                <button className={style.optionCounterButton} onClick={()=>handleOption("adult","i")}>+</button>
                </div>
              </div>
              <div className={style.optionItem}>
                <span className={style.optionText}>Children</span>
                <div className={style.optionCounter}>

                <button disabled={options.children<1} className={style.optionCounterButton} onClick={()=>handleOption("children","d")}>-</button>
                <span className={style.optionCounterNumber}>{options.children}</span>
                <button className={style.optionCounterButton} onClick={()=>handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className={style.optionItem}>
                <span className={style.optionText}>Room</span>
                <div className={style.optionCounter}>
                <button disabled={options.room<=1} className={style.optionCounterButton} onClick={()=>handleOption("room","d")}>-</button>
                <span className={style.optionCounterNumber}>{options.room}</span>
                <button className={style.optionCounterButton} onClick={()=>handleOption("room","i")}>+</button>
              </div>
              </div>
            </div>}
          </div>
          <div className={style.headerSearchItem}>
          <button className={style.headerSearchBtn}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
}

export default Header;
