import logo from "../assets/image.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6 ">
    <div className="flex flex-shrink-0 items-center">
     <img className="mx-6 w-14 pl-4  " src={logo} alt="logo" /> 
     
    </div>
    <div className=" pl-8  m-8 flex items-center justify-center gap-4 text-2xl">

      <a href="https://www.linkedin.com/in/sagar-rathore-a8593b286">
        <>
      <FaLinkedin className="text-cyan-700" />
        </>
      </a>

      <a href="https://github.com/SagarRathore1">
        <>
        <FaGithub className="text-white"/>
        </>
      </a>

      <a href="https://x.com/SagarRathoe2027">
        <>
        <FaSquareXTwitter className="text-white"/>
        </>
      </a>
      

      <a href="https://www.instagram.com/sagarrathore2004/">
      <>
      <FaInstagram className="text-pink-600"/>
      </>
      </a>


      
    </div>
  </nav>
}

export default Navbar
