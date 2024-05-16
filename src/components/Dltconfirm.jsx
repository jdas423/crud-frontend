
export default function Dltconfirm({dlt,setDlt,len}) {
    return(
        <div className="flex flex-col justify-center items-center px-[10px] py-[15px] w-full bg-white">
           <h2 className="text-green-variant w-full text-[16px] font-bold text-center ">Do you really want to delete?</h2>
           <div className="w-full flex justify-end items-center px-[15px] mt-[20px]">
            <form action="">
               <button  type="submit"
                    className="flex ml-[10px] justify-center rounded-md bg-green-variant px-3 py-1.5 text-[14px] font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mr-[10px]">
                   Ok
              </button>
            </form>  
               <button  onClick={()=>setDlt(len)}
                 className="flex  justify-center rounded-md bg-green-variant px-3 py-1.5 text-[14px] font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                   Cancel
               </button>
           </div>
       </div>
    )

}