import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center size-20">
            <img className="mx-2 w-50" src={logo} alt="logo" />
        </div> 
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/shekinahmarie" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          </a>
          <a href="https://github.com/ssmdvc" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          </a>
        </div>
    </nav>
  )
}
export default Navbar