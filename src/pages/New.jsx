import DashboardIcon from '@mui/icons-material/Dashboard';
import { useOutletContext } from 'react-router-dom';

export default function Newproject(){
  const {setLocate}=useOutletContext();
   return (
     <>
       <div className="w-full flex justify-center items-center h-[100vh]">
         <section className="w-[85%] max-w-[1280px] pt-[40px] lg:pt-[120px] pb-[20px] lg:pb-20 bg-green-variant max-xl:pt-[100px] flex flex-col items-center justify-center">
           <div className="relative flex h-[fit-content] flex-1 flex-col justify-center p-[20px] lg:px-8 bg-black rounded-[8px] max-w-[400px] w-[80vw]">
           <div className="absolute right-[25px] bottom-[10px] dashboard-icon cursor-pointer  bg-white rounded-[8px] p-[10px] hover:bg-black"
                     onClick={()=>setLocate("/dashboard")}>
                      <DashboardIcon style={{color:"#6EEB83",fontSize:"20px"}}/>
            </div>
             <div className=" relative sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center flex-col">
               <h2 className="mt-[10px] text-center text-[1rem] font-bold leading-9 tracking-tight text-green-variant">
                 Enter the details of the project
               </h2>
             </div>

             <div className="mt-[10px] sm:mx-auto sm:w-full sm:max-w-sm">
               <form className="space-y-6" action="#" method="POST">
                 <div>
                   <label
                     htmlFor="title"
                     className="block text-[14px] font-medium leading-6 text-green-variant"
                   >
                     Enter the project title
                   </label>
                   <div className="mt-2">
                     <input
                       id="title"
                       name="title"
                       type="text"
                       autoComplete="title"
                       required
                       className="  font-bold !bg-black !text-[12px] block w-full rounded-md border-0 py-1.5 px-[8px] text-green-variant shadow-sm ring-1 ring-inset ring-green-variant placeholder:text-green-variant focus:ring-2 focus:ring-inset focus:ring-green-variant outline-white sm:leading-6"
                     />
                   </div>
                 </div>

                 <div>
                   <label
                     htmlFor="about"
                     className="block text-[14px] font-medium leading-6 text-green-variant"
                   >
                     About
                   </label>
                   <div className="mt-2">
                     <textarea
                       name="about"
                       id="about"
                       required
                       rows={3}
                       cols={30}
                       className=" font-bold !bg-black !text-[12px] block w-full rounded-md border-0 py-1.5 px-[8px] text-green-variant shadow-sm ring-1 ring-inset ring-green-variant placeholder:text-green-variant focus:ring-2 focus:ring-inset focus:ring-green-variant outline-white sm:leading-6"
                     />
                   </div>
                 </div>

                 <div>
                   <label
                     htmlFor="url"
                     className="block text-[14px] font-medium leading-6 text-green-variant"
                   >
                     Enter the image url
                   </label>
                   <div className="mt-2">
                     <input
                       id="url"
                       name="url"
                       type="url"
                       autoComplete="url"
                       required
                       className=" font-bold !bg-black  !text-[12px] block w-full rounded-md border-0 py-1.5 px-[8px] text-green-variant shadow-sm ring-1 ring-inset ring-green-variant placeholder:text-green-variant focus:ring-2 focus:ring-inset focus:ring-green-variant outline-white sm:leading-6"
                     />
                   </div>
                 </div>


                 <div className="!mt-[40px] pb-[55px]">
                   <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-green-variant px-3 py-1.5 text-[14px] font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                   >
                     Create
                   </button>
                 </div>
               </form>

             </div>
           </div>
         </section>
       </div>
     </>
   );
}

