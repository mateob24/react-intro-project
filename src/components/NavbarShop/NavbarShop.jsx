
import { FaCartPlus } from "react-icons/fa";
import "./NavbarShop.css"

// eslint-disable-next-line react/prop-types
export const NavbarShop = ({count}) => {

  return (
    <>
        <nav id="nav-shop">
          <section className="h-3/5 w-full flex justify-between">
            <div className="w-72 flex items-center justify-center">
              <h2 id="name-store"><span className="text-teal-700">MB</span>Shop</h2>
            </div>
            <div id="counter-cart" className="h-14 w-52 self-center flex items-center justify-center">
              <a id="icon" className="text-5xl p-1" href=""><FaCartPlus /></a>
              <p id="counter" className="text-white">{count}</p>
            </div>  
          </section>
          <hr id="hr"/>
          <section className="h-2/5 w-full flex items-center justify-center">
            <ul id="links" className="w-2/4 flex items-center justify-center gap-20">
              <li><a href="" className="text-teal-700">Categorías</a></li>
              <li><a href="" className="text-teal-700">Ofertas</a></li>
              <li><a href="" className="text-teal-700">Novedades</a></li>
            </ul>
          </section>
        </nav>
    </>
  )
}
