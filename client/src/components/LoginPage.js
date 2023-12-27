import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <>
            <h1><b>Login Page</b></h1>
            <form>
                <div >
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                <Link to="/register">Register</Link>
            </form>
        </>
    )
}

export default LoginPage