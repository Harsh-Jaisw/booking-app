import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import useFetch from '../../hooks/useFetch'
import axios from 'axios'
import {useLocation} from 'react-router-dom'

const Datatable = ({columns}) => {
  const location = useLocation()
  const path = location.pathname.split('/')[1]
  console.log(path)
  const [list,setList] = useState(null)
  const {data,loading,error} = useFetch(`/${path}`)
  .then((res)=>res.json())
  .then((apiData)=>console.log(apiData))
  useEffect(()=>{
    setList(data)
  },[data])
  console.log(data,'hii')
  const handleDelete = async (id) => {
    try{
      await axios.delete(`/${path}/${id}`)
    }catch(err){

    }
    setList(list.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
       {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable;
