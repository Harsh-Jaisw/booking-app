import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import style from "./list.module.css";
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
function List() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className={style.listContainer}>
        <div className={style.listWrapper}>
          <div className={style.listSearch}>
            <h1 className={style.lsTitle}>Search</h1>
            <div className={style.lsItem}>
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className={style.lsItem}>
              <label>Check-in date</label>
              <span onClick={() => setOpen(!open)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} - ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
              {open && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className={style.lsItem}>
              <label>Options</label>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Min price <small>per night</small></span>
             <input type="number" className={style.lsOptionInput}/>
             </div>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Max price <small>per night</small></span>
             <input type="number" className={style.lsOptionInput}/>
             </div>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Adult </span>
             <input type="number" className={style.lsOptionInput}/>
             </div>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Children </span>
             <input type="number" className={style.lsOptionInput}/>
             </div>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Room </span>
             <input type="number" className={style.lsOptionInput}/>
             </div>
            </div>
          </div>
          <div className={style.listResult}></div>
        </div>
      </div>
    </>
  );
}

export default List;
