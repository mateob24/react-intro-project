
import './Networks.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const Networks = () => {
  return (
    <>

        <div className="social-media">

          <div className="sm facebook">
            <a className="icon" href="https://web.facebook.com/">
              <FaFacebookF />
            </a>
          </div>

          <div className="sm instagram">
            <a className="icon" href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </div>

          <div className="sm whatsapp">
            <a className="icon" href="https://web.whatsapp.com/">
              <FaWhatsapp />
            </a>
          </div>

          <div className="sm github">
            <a className="icon" href="https://github.com/mateob24">
              <FaGithub />
            </a>
          </div>
        
        </div>
        
    </>    
  )
}