
import { useState,useCallback, createContext} from "react"
import {Outlet,NavLink} from "react-router-dom"

export const globalContext=createContext(
    {
        num:0,
        changeBorder:()=>null
    }
);

export default function RlPage({path}) {
    const [num,setNum]=useState(0);
    const regisClass="mr-[20px] ml-[15px] pb-[10px] max-lg:border-b-[5px] border-b-[2px] border-solid  cursor-pointer";
    const loginClass="pb-[10px] max-lg:border-b-[5px] border-b-[2px] border-solid border-b-deeppink cursor-pointer";
    
 
    const changeBorder = useCallback((number) => {
       if(number>=1 && number<=5) setNum(number);
       else setNum(0);
    },[])

    return(
        <globalContext.Provider value={{num,changeBorder}}>
               <main className="w-full h-[fit-content] flex items-center" onClick={()=>changeBorder(0)} >
                <section className="left-section lg:w-[40%] w-full pl-[20px] flex flex-col  justify-between items-center  max-lg:bg-bg-img max-lg:bg-cover max-lg:bg-no-repeat max-lg:bg-center bg-[#424769] h-[fit-content] min-h-[100vh]">
                 <div className="regis-login-changer flex items-start w-full mt-[30px]  justify-center">
                     <div className="w-[80%] max-w-[400px] flex justify-start items-center h-[100px]">
                     <div className={path==="register" ? `${regisClass} lg:border-b-deeppink border-b-light-blue` : `${regisClass} border-b-transparent`}
                      >
                          <NavLink to="/register" className="max-lg:text-light-blue max-lg:uppercase max-lg:font-black">Registration </NavLink>
                      </div>
                      <div className={path==="login" ? `${loginClass} lg:border-b-deeppink border-b-light-blue` : `${loginClass} border-b-transparent`}>
                      <NavLink to="/login"  className="max-lg:text-light-blue max-lg:uppercase max-lg:font-black">Login </NavLink>
                      </div>
                     </div>               
                 </div>
                 <div className="regis-login-dis w-full flex justify-center items-center h-[700px]">
                    <Outlet/>
                 </div>
                 <div className="w-full">

                 </div>
            </section>
            <section className=" lg:block hidden right-section w-[60%] h-[100vh] bg-bg-img bg-center bg-cover min-h-[830px] bg-no-repeat ">

            </section>
               </main>
        </globalContext.Provider>
        
    )
}