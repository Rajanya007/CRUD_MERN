import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import './css/update.css'


function UpdateUser() {


    const { id } = useParams();
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [eml, setEml] = useState('')
    const [ps, setPs] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        axios.post("http://localhost:8080/updateUserWithId", { id }).then((res) => {
            console.log(res);
            setFname(res.data[0].fname)
            setLname(res.data[0].lname)
            setEml(res.data[0].eml)
            setPs(res.data[0].ps)
        }).catch((err) => {
            console.log(err);
        })


    }, [])
    const Submit = (e) => {
        e.preventDefault();

        if (fname === '' || lname === '' || eml === '' || ps === '') {
            alert("Please fill all the fields");
        }
        else {




            axios.post("http://localhost:8080/updateUser", { fname, lname, eml, ps, id })

                .then((res) => {
                    console.log(res);
                    navigate("/")
                })
                .catch((err) => {
                    console.log(err);
                })

        }

    }
    return (
        <>

            <form onSubmit={Submit} >
                <h1>Update Details</h1>
                <div className="form-group">
                    <label for="exampleInputfname1">First Name</label>
                    <input type="text" className="form-control" id="exampleInputfname1" aria-describedby="emailHelp" placeholder="Enter First Name" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="exampleInputlname1">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputlname1" placeholder="Enter Last Name" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Email" name="eml" value={eml} onChange={(e) => setEml(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="ps" value={ps} onChange={(e) => setPs(e.target.value)} />
                </div>
                <br></br>

                <button type="submit" className="btn btn-primary" id="btn2" name="update">Update</button>
            </form>

        </>
    )
}

export default UpdateUser