import AcUnitIcon from '@mui/icons-material/AcUnit';
import { whoDonatedObj } from './whodonatedobj.js';
import "./whodonatedcss.css"
export default function Whodonated(){
    return(
       <div className="max-w-[1280px] w-[80%] overflow-hidden bg-light-blue h-full">
          <div className="animate relative top-[30px]" style={{width:`${350*whoDonatedObj.length}px`}}>
          {
            whoDonatedObj.map((obj,ind)=>{
               return (
                <div className='w-[350px] inline-block' key={ind+1}>
                   <div className='flex justify-center items-start text-white px-[10px] w-full' key={obj.id}> 
                    <div className='logo pr-[10px] text-deeppink'>
                         <AcUnitIcon/>
                    </div>
                    <div className='text-[20px] leading-[30px] max-sm:text-[14px]'>
                        <span>{`${obj.name} just donated`}</span>
                         <span className='text-deeppink'> {`₹${obj.donated}`}</span>
                    </div>
                </div>      
                </div>
               
               ) 
            })
          }

          </div>
       </div>
    )
}