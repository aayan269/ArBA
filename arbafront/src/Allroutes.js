import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './component/signin'
import Signup from './component/signup'

export default function Allroutes() {
  return (
  <Routes>
    <Route  path="/"  element={<Signup/>}   />
    <Route  path="/login"  element={<Signin/>}   />
  </Routes>
  )
}
