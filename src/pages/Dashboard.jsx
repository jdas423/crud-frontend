import { obj } from "./cardsJson"
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import AddIcon from '@mui/icons-material/Add';
import { useReducer, useState,useEffect } from "react";
import {  useLoaderData, useOutletContext} from "react-router-dom";
import Msgbox from "../components/Msgbox";
import Update from "../components/Update";
import Dltconfirm from "../components/Dltconfirm";


export async function loader(){
    // const obj=JSON.parse(await );
    // return {obj};
    return null;
}



const reducer=(state,{action,value})=>{
    switch(action){
        case "setShowIcons": return{
            ...state,
            showIcons:value
        }

        case "setShowDetails":return{
            ...state,
            showDetails:value
        }
    }

}



export default function Dashboard(){
    // const {obj}=useLoaderData();
    const {locate,setLocate}=useOutletContext();
    const [showMsgBox,setShowMsgBox]=useState(true);
    const [update,setUpdate]=useState(obj.length);
    const [dlt,setDlt]=useState(obj.length);

    const [state,dispatch]=useReducer(reducer,{showIcons:obj.length,showDetails:obj.length})

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   
    useEffect(()=>{

        if(showMsgBox){
            setTimeout(()=>{
                setShowMsgBox(false)
            },3000)
        }

    },[showMsgBox])


    return(
  <div className="w-full flex justify-center items-center">
<section className="relative w-[85%] max-w-[1280px] pt-[40px] lg:pt-[120px] pb-[20px] lg:pb-20 bg-green-variant max-xl:pt-[100px] flex flex-col items-end justify-center">

{ (update != obj.length) && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[180]" key="update">
    <div className={`update absolute z-[180] left-[calc(50vw-200px)] max-extrasm:left-[calc(10vw)] top-[calc(50vh-314px)] transition-[top] duration-[0.5s] ease-linear rounded-[8px] `}>
    <Update obj={obj[update]} setUpdate={setUpdate} len={obj.length}/>
    </div>
  </div>
)}

{ (dlt != obj.length) && (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[150]" key="delete">
    <div className={`delete fixed left-[15%] sm:left-[calc(50%-150px)] border-[2px] border-solid border-green-variant  rounded-[4px] top-[250px] z-[180] sm:w-[300px] w-[70%] transition-[top] duration-[1s] ease-linear`}>
         <Dltconfirm ind={dlt} setDlt={setDlt} len={obj.length}/> 
    </div>
  </div>
)}

    

    <div className={`msg-box fixed left-[15%] sm:left-[calc(50%-136px)] border-[2px] border-solid border-green-variant  rounded-[4px] ${showMsgBox? "top-[125px]" : "top-[-100px]"} z-[200] sm:w-[272px] w-[70%] transition-[top] duration-[1s] ease-linear`}>
         <Msgbox msg={"created"}/> 
    </div>

    

    <div className="add-icon cursor-pointer  bg-black rounded-[8px] p-[10px] hover:bg-white my-[25px] mr-[20px]" 
     onClick={()=>{
            setLocate("/dashboard/new")
     }}> 
        <AddIcon style={{color:"#6EEB83",fontSize:"20px"}}/>
    </div>
    
    
   <div className="container">
      <div className="flex flex-wrap -mx-4">
        {
            obj.map((item,ind)=>{
                return(
                    <div className="relative w-full md:w-1/2 xl:w-1/3 px-4" key={`card-${ind}`}
                    onMouseOver={()=>dispatch({action:"setShowIcons",value:ind})}
                    onMouseOut={()=>dispatch({action:"setShowIcons",value:obj.length})}>

                        {
                            (state.showIcons===ind) && (
                                <div className="absolute w-[90%] flex justify-end items-center gap-[10px] top-[10px] right-0 left-0">
                                <div className="update-icon cursor-pointer  bg-black rounded-[8px] p-[10px] hover:bg-white "
                                   onClick={()=>setUpdate(ind)}
                                >
                                     <UpdateIcon style={{color:"#6EEB83",fontSize:"20px"}}/>
                                </div>
                                <div className="delete-icon cursor-pointer  bg-black rounded-[8px] p-[10px] hover:bg-white "
                                onClick={()=>setDlt(ind)}>
                                    <DeleteIcon style={{color:"#6EEB83",fontSize:"20px"}}/>
                                </div>
                            </div>
                            ) 
                        }
                    
                    <div className="bg-white rounded-lg overflow-hidden mb-10 flex flex-col justify-center items-center">
                       <img
                          src={item.imgUrl}
                          alt="image"
                          className="w-full"
                          />
                       <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                          <h3 className="
                                font-semibold
                                text-black text-[20px]
                                mb-4
                                block
                                hover:text-primary
                                ">
                             {item.title}
                          </h3>
                          {
                            (state.showDetails!=ind) && (
                            <p className=" text-[16px] text-black leading-relaxed mb-[10px]">
                                {item.about.length>98?item.about.substring(0,95)+"...":item.about}
                                </p>   
                            )
                          }
                          
                          

                          {
                             (state.showDetails===ind) && (
                                <>
                          <p className=" text-[16px] text-black leading-relaxed mb-[10px]">
                            {item.about}
                          </p>

                          <p className="text-black w-[100%] mb-[10px]">
                              <span className="inline-block mr-[10px] font-bold text-[16px] w-full">Date created</span>
                              <span className="inline-block text-[16px] w-full">{new Date(item.dateCreated).toLocaleDateString('en-US', options)}</span>
                          </p>
                          <p className="text-black w-[100%] mb-[10px]">
                              <span className="inline-block mr-[10px] font-bold text-[16px] w-full" >Last updated</span>
                              <span className="inline-block  text-[16px] w-full">{new Date(item.lastDateUpdated).toLocaleDateString('en-US', options)} </span>
                          </p>
                          
                          <button
                             className="
                             inline-block
                             py-2
                             px-7
                             border border-[#E5E7EB]
                             rounded-full
                             text-[16px] text-white
                             bg-green-variant
                             font-medium
                             hover:border-primary hover:bg-primary hover:text-white
                             transition
                             "
                             onClick={()=>dispatch({action:"setShowDetails",value:obj.length})}
                             >
                          Hide Details
                          </button>
                                </>
                             )
                          }
                        
                          {
                             (state.showDetails!=ind) && 
                             <button
                             className="
                             inline-block
                             py-2
                             px-7
                             border border-[#E5E7EB]
                             rounded-full
                             text-[16px] text-white
                             bg-green-variant
                             font-medium
                             hover:border-primary hover:bg-primary hover:text-white
                             transition
                             "
                             onClick={()=>dispatch({action:"setShowDetails",value:ind})}
                             >
                          View Details
                          </button>

                          }
                          
                       </div>
                    </div>
                 </div>
                )
            })
        }
        

      </div>
   </div>
</section>
    
  </div>

    )
}