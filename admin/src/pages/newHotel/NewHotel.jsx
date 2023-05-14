import style from './NewHotel.module.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';
import axios from 'axios'
const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info,setInfo] = useState({})
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/rooms");
  const handleChange = e =>{
      setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
  }
  const handleSelect = e =>{
  const value =  Array.from(e.target.selectedOptions,(option)=>option.value)
  setRooms(value)
  }
  const handleClick = async e =>{
try{
  const list = await Promise.all(
    Object.values(files).map(async (file)=>{
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset","upload")
    const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dj5abijii/image/upload",data)
      const {url} = uploadRes.data
const newUser ={
...info,img:url,
}
  }
  ))
  const newHotel = {
    ...info,rooms,photos:list,
  }
  await axios.post('/hotels',newHotel)
}catch(err){

}
  }
  return (
    <div className={style.new}>
      <Sidebar />
      <div className={style.newContainer}>
        <Navbar />
        <div className={style.top}>
          <h1>Add New Product</h1>
        </div>
        <div className={style.bottom}>
          <div className={style.left}>
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className={style.right}>
            <form>
              <div className={style.formInput}>
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className={style.icon} />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className={style.formInput} key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
                <div className={style.formInput} >
                  <label>Featured</label>
                  <select id='featured' onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                    </select>
                </div>
                <div className={style.selectRooms} >
                  <label>Rooms</label>
                  <select id='rooms' multiple onChange={handleSelect}>
                   {loading ? 'loading':data&&data.map(room=>(
                    <option key={room.id} value={room._id}>{room.title}</option>
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

export default NewHotel;
