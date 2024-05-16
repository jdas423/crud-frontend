import { NavLink } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Signin from "./Signin";
import Signup from "./Signup";
import Mobilemenu from "./Mobilemenu";
import { useLocation,useNavigate } from "react-router-dom";
import { useReducer } from "react";

const reducer=(state,{type,value})=>{
  switch(type){
   case "setShowMenu": return{
          ...state,
          showMenu:value
       }
   case "setSignUpShow": return{
       ...state,
       signUpShow:value
   }
   case "setSignInShow": return{
       ...state,
       signInShow:value
   }     
   }
  }




export default function Navbar({setLocate,locate}){
  const [state,dispatch]=useReducer(reducer,{showMenu:false,signUpShow:false,signInShow:false});
    const location=useLocation();
    const navigate=useNavigate();
    const handlePageChange=()=>{
      console.log(locate)
      console.log(location.pathname)
      if(location.pathname!==locate){
          navigate(locate);
      }
    }

    handlePageChange();
    
    
    return(
      <header className="nav-wrapper w-full flex justify-center items-center text-[14px] fixed z-[100] top-[10px] ">
        <nav className="navbar max-w-[1280px] w-[95%] flex justify-between items-center p-[20px] bg-white  text-black">
             <div className="logo text-[16px] ml-[10px] uppercase  font-extrabold text-green-variant" >
                 Project Manager
             </div>
             <div className="right-section flex justify-content items-center gap-[30px] ">
                <ul className="pages flex justify-center items-center gap-[15px] font-bold max-md:hidden">
                    <li className="home" key="home">
                        <NavLink to="/" onClick={()=>setLocate("/")}>Home</NavLink>
                    </li>
                    <li className="about" key="about">
                       <NavLink to="/about" onClick={()=>setLocate("/about")}>About</NavLink>
                    </li>
                </ul>
                <ul className="buttons flex justify-content items-center gap-[10px]">
                   <li className="signup max-sm:hidden" key="signup">
                       <button onClick={()=>dispatch({type:"setSignUpShow",value:true})}>
                          Sign Up
                       </button>
                   </li>
                   <li className="signin max-sm:hidden" key="signin">
                     <button onClick={()=>{dispatch({type:"setSignInShow",value:true})}}>
                          Sign In
                       </button>

                   </li>
                   {
                    !state.showMenu && (
                   <li className="hamburger-menu ml-[-15px] md:hidden max-sm:ml-[20px] transition-display duration-[1] ease-linear" key="hamburgericon"
                     onClick={()=>{
                      dispatch({type:"setShowMenu",value:true});
                      setLocate(location.pathname)
                     }}
                   >
                   <button className="bg-transparent text-green-variant">
                          <NavLink>
                             <MenuIcon/>
                          </NavLink>
                    </button>
                   </li>

                    )
                   }
                   {
                    state.showMenu && 
                   (<li className="close-menu ml-[-15px] md:hidden max-sm:ml-[20px] transition-display duration-[1] ease-linear" key="closeicon"
                   onClick={()=>dispatch({type:"setShowMenu",value:false})}>
                   <button className="bg-transparent text-green-variant">
                          <NavLink>
                             <CloseIcon/>
                          </NavLink>
                    </button>
                   </li>)
                   }
                </ul>
             </div>
        </nav>
        <Mobilemenu state={state} dispatch={dispatch} setLocate={setLocate}/>
       
       
{state.signUpShow && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[150]" key="signup">
    <div className={`signup  absolute z-[180] left-[calc(50vw-200px)] max-extrasm:left-[calc(10vw)] top-[calc(50vh-314px)] transition-[top] duration-[0.5s] ease-linear rounded-[8px] `}>
      <Signup dispatch={dispatch}/>
    </div>
  </div>
)}


{state.signInShow && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[150] " key="signin">
    <div className={`signin absolute z-[180] left-[calc(50vw-150px)] max-extrasm:left-[calc(10vw)] top-[calc(50vh-150px)] transition-[top] duration-[0.5s] ease-linear rounded-[8px]`}>
      <Signin dispatch={dispatch}/>
    </div>
  </div>
)}

      </header>
    )
}