import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import {Bars3Icon} from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black sm:justify-around bg-opacity-20">
        <div>
            <img className="h-10 md:h-14" src={logo} alt="logo" />
        </div>
        <nav className="justify-center hidden gap-4 sm:flex">
            <NavLink>Home</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Tour Packages</NavLink>
            <NavLink>Contact Us</NavLink>

        </nav>
        <div className="hidden sm:flex">
            <button>Login</button>
            <button>SignUp</button>
        </div>
        <Bars3Icon className="w-6 h-6 sm:hidden"/>
    </header>
  )
}

export default Header
