import {fundraiserObj} from "./fundraiserObj"
import FundraiserCard from "./FundraiserCard"
export default function Fundraiser(){
    return(
        <div className="flex flex-col justify-center items-start max-w-[1280px] w-[90%] max-xl:w-[80%] max-lg:w-[95%] max-md:w-[75%] max-sm:w-[80%]">
        <div className="text-[2.5rem] mt-[10px] w-full text-left  text-light-blue font-bold max-md:text-[30px]">Support a fundraiser</div>
        <div className="text-[1.8rem] mb-[20px] w-full text-left text-light-blue max-md:text-[22px]">Pick a cause close to your heart and donate now</div>

        <div className="w-full grid grid-cols-3  gap-[2rem] max-lg:gap-[0.5rem] max-md:gap-[1.5rem] max-xl:grid-cols-2 max-xl:gap-[40px] max-md:grid-cols-1">
           {
            fundraiserObj.map((obj,ind)=>{
                return <FundraiserCard key={ind} {...obj}/>
            })
           }
        </div>
        </div>
    )
}