
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useCallback, useMemo,useState } from 'react';

export default function FundraiserCard({title,author,supporters,assignedDate,goal,raised,id}){
    const [hover,setHover]=useState(false);
    const calculateDays=useMemo(()=>{
        return Math.floor(Math.abs(new Date(Date.now()-new Date(assignedDate)))/(1000*60*60*24))
    },[assignedDate]);
   
    const calculateCommas=useCallback((num)=>{
        let str="",ini=0,cnt=0;
        while(num>0){
           if(cnt===3 && ini===0){
               str=","+str;
               cnt=0;
               ini=1;
           }
           else if(cnt===2 && ini===1){
               str=","+str;
               cnt=0;
           }
           str=(num%10).toString()+str;
           num=Math.floor(num/10);
           cnt++;
        }
        return str;
    },[])


   
  
    return(
         <div className="fundraisercard flex flex-col justify-center items-start rounded-[10px] bg-dark-blue text-[1.5rem] hover:scale-[1.02] transition-transform duration-[1] ease-linear cursor-pointer"
         onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <div className="img-container w-full h-[300px] bg-center bg-cover bg-no-repeat rounded-[10px]" style={{backgroundImage:`url('/images/fundraiser${id}.jpg')`}}>
            </div>
            <div className="title w-[90%] mt-[25px] text-[1.8rem] leading-[40px] ml-[20px] mr-0 mb-[10px] max-md:text-[25px]">
                 {title.length>40?title.substring(0,40)+"...":title}
            </div>
            <div className="author ml-[20px] mb-[10px]">
                 by {author}
            </div>
            <div className=" w-[85%] ml-[16px] flex text-[1.1rem]  justify-between items-center">
               <div className="supporters flex justify-center items-center">
                   <span className="logo inline-block mr-[5px] ">
                      <PeopleAltIcon style={{fontSize:"21px",color:"deeppink"}}  />
                   </span>
                   <span className="supporters-text inline-block mt-[5px]">
                      {supporters} supporters
                   </span>
               </div>
               <div className="daysLeft flex justify-center items-center">
                   <span className="logo mr-[5px]">
                       <AccessTimeIcon style={{fontSize:"21px",color:"deeppink"}} />
                   </span>
                   <span className="supporters-text mt-[5px]">
                      {calculateDays===1?calculateDays+" day left":calculateDays+" days left"}
                   </span>
               </div>
           
           
            </div>
            {
                !hover && (
                    <>
                    <div className="bar-container w-full flex justify-center items-center mt-[20px] mb-[10px]">
                <div className="bar w-[80%] h-[10px] ml-[-15px] bg-white rounded-[10px]">
                    <div className="progress h-[10px] bg-deeppink rounded-[10px]"  style={{width:`${(raised/goal)*100}%`}}></div>
                </div>
            </div>
            <div className="raised text-[1.1rem] ml-[20px] flex justify-between items-center mt-[10px] mb-[20px] w-[85%] flex-wrap">
            <div className="raised mr-[10px]">
            <span className='text-deeppink'>₹{calculateCommas(raised)}</span> raised
               </div>
               <div className="goal">
                Raised of <span className='text-deeppink'>₹{calculateCommas(goal)}</span> goal
               </div>
            </div>
                    
                    </>
                )
            }
            

            {
                hover && (
                    <div className="button flex justify-center items-center w-full h-[100px] p-[20px]">
                    <button className="py-[5px] px-[20px] text-white bg-deeppink rounded-[10px] text-[20px]  mr-[15px] w-[80%]">Donate Now</button>
                   </div>
                )
            }

           
         </div>
    )
}