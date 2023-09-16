
import "../Navbar/Navbar.css"
import { NavLink } from "react-router-dom";

const profile = 'https://dragonball-zxk.com/wp-content/uploads/2023/03/dragonball.png'

export const Navbar = () => {
  return (
    <>

      <nav id="nav">
        <div className="ident">
          <img src={profile} id="img-header" alt="img" />
          <h1 className='title'>MB</h1>
        </div>
        <ul id="nav-link">
          <li><NavLink to='/' >Home</NavLink></li>
          {/* <li><NavLink to='*' >My projects</NavLink></li> */}
          <li><NavLink to='*' >About me</NavLink></li>
          <li><NavLink to='/Contact' >Contact</NavLink></li>
          <li><NavLink to='/Shop' >Shop</NavLink></li>
        </ul>
      </nav>
      
    </>
  )
}
