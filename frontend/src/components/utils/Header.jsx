import React from 'react'
import { Link } from "react-router-dom";
import '../../stylesheets/header.css'

function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">Travelopia enquiry</a>
      <div className="header-right">
        <Link to='/' className="active">Home</Link>
        <Link to='/list'>List</Link>
      </div>
    </div>
  )
}

export default Header