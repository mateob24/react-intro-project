// import React from 'react'
import "../Navbar/Navbar.css"

const profile = 'https://dragonball-zxk.com/wp-content/uploads/2023/03/dragonball.png'

export const Navbar = () => {
  return (
    <>
      <nav>
        <nav className="ident">
          <img src={profile} id="img-header" alt="img" />
          <h1 className='title'>MB</h1>
        </nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Productos</a></li>
        </ul>
      </nav>
    </>
  )
}
