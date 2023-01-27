import axios from "axios";
import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
 
  const handleChange = e => { 
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = ()=>{
    const { name, email, password, reEnterPassword } = user
    if(name && email && password && (password === reEnterPassword)){
      axios.post("http://localhost:8080/register", user)
      .then(res => {
        alert(res.data.message)
        history("/login")
      });
    }else{
      alert("Invalid Input")
    }
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your Name"   
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-Enter Password"
        onChange={handleChange}
      />
      <div className="button" onClick={register}>Register</div>
      <div>or</div>
      <div className="button" onClick={()=> history('/login')}>Login</div>
    </div>
  );
};

export default Register;
