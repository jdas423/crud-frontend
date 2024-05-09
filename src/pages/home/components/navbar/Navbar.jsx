import "./navbar.css"
import { NavLink } from "react-router-dom"

export default function Navbar(){
    return(
      <nav className="fixed w-full h-[100px] flex justify-center text-[1rem] text-white bg-light-blue z-[200]">
         <div className="w-full max-w-[1280px] flex  justify-between">
            <div className="logo uppercase ml-[100px] xl:ml-[50px] max-sm:ml-[30px] leading-[6rem] text-[40px] tracking-[0.1rem]">
                Ngo
            </div>
            <div className="login flex justify-center items-center">
                <ul className="list-none mr-[15px]">
                   <li>About</li>
                </ul>
                <div>
                    <button className=""><NavLink to="/register">Register</NavLink></button>
                </div>
                <div className="mr-[30px]">
                    <button><NavLink to="/login">Login</NavLink></button>
                </div>
            </div>
         </div>
      </nav>
    )
}