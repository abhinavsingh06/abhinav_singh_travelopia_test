import React from 'react'
import '../../stylesheets/header.css'

function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">Travelopia enquiry</a>
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">List</a>
      </div>
    </div>
  )
}

export default Header