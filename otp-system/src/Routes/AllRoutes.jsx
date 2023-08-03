import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mobile from '../Pages/Mobile'
import OTP from '../Pages/OTP'
import Product from '../Pages/Product'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Mobile/>}/>
          <Route path='/otp' element={<OTP/>}/>
          <Route path='/products' element={<Product/>}/>  
        </Routes>
    </div>
  )
}

export default AllRoutes