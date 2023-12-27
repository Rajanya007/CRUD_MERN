import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'




function User() {
    const [arr,setArr]=useState([])
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.post("http://localhost:8080/fetchUser")
        .then((res) => {
            setArr(res.data);
            
        })
        .catch((err) => {
            console.log(err);
        })
    },[])
    const delOp=(id)=>{
        axios.post("http://localhost:8080/deleteUser",{id})
        .then((res) => {
            console.log(res);
            alert("Deleted Successfully");
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    // func();
    return (
        <div>
        <div className='d-flex  align-items-center' style={{ flexDirection:"column",width:100+"vw"}}>
            <h1 className="text-center"><b>CRUD SYSTEM</b></h1>
            

            <table  id="example" className="table table-striped" style={{width:60+"%"}}>
                <thead>
                    <tr>
                        
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan={2} style={{textAlign:'center'}}> Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((item,index)=>{ 
                            return(
                                <tr key={index}>
                                    <td>{item.fname}</td>
                                    <td>{item.lname}</td>
                                    <td>{item.eml}</td>
                                    <td>{item.ps}</td>
                                    <td><Link to={`/update/${item._id}`} params={{item}}><button className='btn btn-outline-primary'>Update</button></Link></td>
                                    <td><button className='btn btn-outline-danger' onClick={(e)=>delOp(item._id)}>Delete</button></td>
                                </tr>
                            )
                        })
                        
                    }
                    <Link to="/create" ><button className='btn btn-outline-success'>Add+</button></Link>
                    {/* <Link to="/test" ><button className='btn btn-outline-danger'>Login</button></Link> */}
                    

                </tbody>
            </table>
        </div>
        <center>

        
        </center>
    </div>
  )
}

export default User