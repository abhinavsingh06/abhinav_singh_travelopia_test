import React from 'react'
import '../../stylesheets/header.css'

function Header() {
  return (
    <div class="header">
      <a href="#default" class="logo">Travelopia enquiry</a>
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#contact">List</a>
      </div>
    </div>
  )
}

export default Header