import style from './NewRoom.module.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';
import axios from 'axios'
const NewRoom = () => {
  const [file, setFile] = useState("");
  const [info,setInfo] = useState({})
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms,setRooms] = useState('')
  const { data, loading, error } = useFetch("/hotels");
  const handleChange = e =>{
      setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
  }
  const handleClick = async (e) =>{
  e.preventDefault()
  const roomNumbers = rooms.split(',').map({number:rooms})
  try{
     await axios.post(`/rooms/${hotelId}`,{...info,roomNumbers})
  }catch(err){

  }

  }
  return (
    <div className={style.new}>
      <Sidebar />
      <div className={style.newContainer}>
        <Navbar />
        <div className={style.top}>
          <h1>Add New Room</h1>
        </div>
        <div className={style.bottom}>
          
          <div className={style.right}>
            <form>
              {roomInputs.map((input) => (
                <div className={style.formInput} key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} id={input.id} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className={style.formInput} >
                  <label>Rooms</label>
                 <textarea onChange={e=>setRooms(e.target.value)} placeholder='give comma between room numbers'/>
                </div>
               <div className={style.formInput} >
                  <label>Choose a Hotel</label>
                  <select id='hotelId' onChange={e=>setHotelId(e.target.value)}>
                    {loading?'loading':data&&data.map(hotel=>(
                    <option key={hotel.id} value={hotel._id}>{hotel.name}</option>
                    ))}
                    </select>
                    
                </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom ;
