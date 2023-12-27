import React from 'react'
import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Deluser() {
    const delOp=(id)=>{
        axios.post("http://localhost:8080/deleteUser",{id})
        .then((res) => {
            console.log(res);
            
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (
    <div></div>
  )
}

export default Deluser