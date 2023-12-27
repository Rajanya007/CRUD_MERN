import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useParams, useNavigate } from 'react-router-dom'

function CreateUser() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [eml, setEml] = useState('')
    const [ps, setPs] = useState('')
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();

        if (fname === '' || lname === '' || eml === '' || ps === '') {
            alert("All fields are required");
            return;
        }
        else {



            axios.post("http://localhost:8080/createUser", { fname, lname, eml, ps })
                //Request the list of products
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
            <h1>Register</h1>
            <form onSubmit={Submit}>
                <div class="form-group">
                    <label for="exampleInputfname1">First Name</label>
                    <input type="text" class="form-control" id="exampleInputfname1" aria-describedby="emailHelp" placeholder="Enter First Name" name="fname" onChange={(e) => setFname(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputlname1">Last Name</label>
                    <input type="text" class="form-control" id="exampleInputlname1" placeholder="Enter Last Name" name="lname" onChange={(e) => setLname(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Email" name="eml" onChange={(e) => setEml(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="ps" onChange={(e) => setPs(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary" id="btn2" name="crt">Create User</button>
            </form>

        </>
    )
}

export default CreateUser