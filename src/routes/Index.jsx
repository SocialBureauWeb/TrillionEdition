import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import NotFound from '../components/NotFound'

const Index = () => {
  
  return (
    <div>
        <BrowserRouter>
        <Routes>
              <Route path='/register' element={<Register/>}/>
              <Route path='/forgotpassword' element={<ForgotPassword/>}/>
              <Route path='/resetpassword' element={<ResetPassword/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Index