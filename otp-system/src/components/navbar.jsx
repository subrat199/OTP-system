import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <Link to="/">Mobile</Link>
        <Link to="/otp">OTP</Link>
        <Link to="/product">Products</Link>
    </div>
  )
}

export default navbar