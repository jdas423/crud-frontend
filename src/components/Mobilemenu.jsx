import { NavLink } from "react-router-dom"

export default function Mobilemenu({state,dispatch,setLocate}){
    return(
        <div className={`absolute z-[120] menu w-[60vw] h-[100vh] top-[-10px] left-[-60vw] md:hidden flex justify-center ${state.showMenu ? 'left-[0]' : 'left-[-60vw]'} items-start bg-white text-green-variant transition-[left] duration-[2] ease-in-out max-w-[230px]`}> 
        <ul className="pages flex flex-col justify-start items-center gap-[20px] font-bold w-full">
                  <li className="home mt-[20px]" key="home">
                      <NavLink to="/" onClick={()=>{
                        dispatch({type:"setShowMenu",value:false});
                        setLocate("/")
                    
                    }}>Home</NavLink>
                  </li>
                  <li className="about" key="about">
                     <NavLink to="/about" onClick={()=>{
                        dispatch({type:"setShowMenu",value:false});
                        setLocate("/about")
                    
                    }}>About</NavLink>
                  </li>
                  <li className="signup sm:hidden" key="signup">
                     <button className="py-[8px] px-[30px]" onClick={()=>dispatch({type:"setSignUpShow",value:true})}>
                       Sign Up
                     </button>
                 </li>
                 <li className="signin sm:hidden" key="signin">
                   <button className="py-[8px] px-[30px]" onClick={()=>{dispatch({type:"setSignInShow",value:true})}}>
                        Sign In
                     </button>

                 </li>
              </ul>
      </div>
    )
}