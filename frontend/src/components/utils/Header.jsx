import React from 'react'
import { NavLink } from "react-router-dom";
import '../../stylesheets/header.css'

function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">Travelopia enquiry</a>
      <div className="header-right">
        <NavLink to='/' activeClassName="active">Home</NavLink>
        <NavLink to='/list' activeClassName="active">List</NavLink>
      </div>
    </div>
  )
}

export default Header