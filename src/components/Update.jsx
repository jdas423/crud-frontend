import CloseIcon from '@mui/icons-material/Close';
import { Form } from 'react-router-dom';
import axios from 'axios';

export default function Update({obj,setUpdate,len}){

  const  handleSubmit=async (e)=>{
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      try {
        const response = await axios.post('/your-endpoint', formProps);
        
        // Handle the response as needed
      } catch (error) {
        console.error('There was an error sending the form data:', error);
      }
  }

   return (
     <>
       
       <div className="flex h-[fit-content] flex-1 flex-col justify-center p-[20px] lg:px-8 bg-white rounded-[8px] max-w-[400px] w-[80vw]">
        <div className=" relative sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center flex-col">
        <div className='absolute top-[-10px] right-[-10px] p-[10px] cursor-pointer'
         onClick={()=>setUpdate(len)}
        ><CloseIcon style={{fontSize:"16px",color:"#6EEB83"}}/></div>
          <h2 className="mt-[10px] text-center text-[1rem] font-bold leading-9 tracking-tight text-green-variant">
            Update your project details
          </h2>
        </div>

        <div className="mt-[10px] sm:mx-auto sm:w-full sm:max-w-sm">
          <Form className="space-y-6" method="POST" onSubmit={handleSubmit}>
           
         

          <div>
                   <label
                     htmlFor="title"
                     className="block text-[14px] font-medium leading-6 text-green-variant"
                   >
                      project title
                   </label>
                   <div className="mt-2">
                     <input
                       id="title"
                       name="title"
                       type="text"
                       defaultValue={obj.title}
                       autoComplete="title"
                       required
                       className="  font-bold !bg-black !text-[12px] block w-full rounded-md border-0 py-1.5 px-[8px] text-green-variant shadow-sm ring-1 ring-inset ring-green-variant defaultValue:text-green-variant focus:ring-2 focus:ring-inset focus:ring-green-variant outline-white sm:leading-6"
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
                       defaultValue={obj.about}
                       className=" font-bold !bg-black !text-[12px] block w-full rounded-md border-0 py-1.5 px-[8px] text-green-variant shadow-sm ring-1 ring-inset ring-green-variant defaultValue:text-green-variant focus:ring-2 focus:ring-inset focus:ring-green-variant outline-white sm:leading-6"
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
                       defaultValue={obj.imgUrl}
                       className=" font-bold !bg-black  !text-[12px] block w-full rounded-md border-0 py-1.5 px-[8px] text-green-variant shadow-sm ring-1 ring-inset ring-green-variant defaultValue:text-green-variant focus:ring-2 focus:ring-inset focus:ring-green-variant outline-white sm:leading-6"
                     />
                   </div>
                 </div>
                  
                  <div>
                  <input type="hidden" name="id" value={obj.id}/>
                  </div>
            

                 <div className="!mt-[40px] pb-[55px]">
                   <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-green-variant px-3 py-1.5 text-[14px] font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                   >
                     Update
                   </button>
                 </div>
          </Form>

         
        </div>
      </div>

     </>
   );
}



