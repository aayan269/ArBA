import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import ("../App.css")
const initial={
    fullName:"",userName:"",password:"",email:""
}
export default function Signup() {
const [registered,setRegistered]=useState({})
const [file,setFile]=useState(null)
const navigate=useNavigate()
const handleChange=(e)=>{
    const {name,value}=e.target
    setRegistered({...registered,[name]:value})
}
const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(registered,file)
    const formData = new FormData();
    formData.append('userName', registered.userName);
    formData.append('fullName', registered.fullName);
    formData.append('email', registered.email);
    formData.append('password', registered.password);
    formData.append('avatar', file);
    fetch('https://arba.onrender.com/user/signup', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data =>{ console.log(data)
    if(data.message=="user created"){
     navigate("/login")
    }}
    )
    .catch(error => console.error(error));
//     const data= new FormData()
//     data.append("file",file)
//     console.log(data)
//    registered.avatar=file
//       try{
//    // console.log(registered)
//     let res=await axios.post("http://localhost:8080/user/signup",)
//     console.log(res.data)
//    } catch(e){
//     console.log(e)
//    }



}

  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit}>
      <label>Avatar</label>
        <input  type="file"  onChange={e=>setFile(e.target.files[0])}  required/>
        <label>User_Name</label>
        <input type="text" value={registered.userName} name="userName" onChange={handleChange} required/>
        <label>Full_Name</label>
        <input type="text" value={registered.fullName} name="fullName" onChange={handleChange} required/>
        <label>Email</label>
        <input type="email" value={registered.email} name="email" onChange={handleChange} required/>
        <label>Password</label>
        <input type="password" value={registered.password} name="password" onChange={handleChange} required/>
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  )
}
