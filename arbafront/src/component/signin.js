import axios from 'axios'
import React, { useState } from 'react'
import ("../App.css")

export default function Signin() {
    const [loginData,setLoginData]=useState({})

    const handleChange=(e)=>{
        const {name,value}=e.target
        setLoginData({...loginData,[name]:value})
    }
    const handleSubmit=async(e)=>{
e.preventDefault()
console.log(loginData)
try{
let res= await axios.post("https://arba.onrender.com/user/login",loginData)
console.log(res.data)
if(res.data.message=="login sucess"){
alert("login successfull but due to short of time, unable to build whole frontend but backend is ready you can check")
}
}
catch(e){
    console.log(e)
}
    }
  return (
    <>
    <p className="title">Login Form</p>

    <form className="App" onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" value={loginData.email} name="email" onChange={handleChange} required/>
      <label>Password</label>
      <input type="password" value={loginData.password} name="password" onChange={handleChange} required/>
      <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
    </form>
  </>
  )
}
