
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function DonationbenefitsCard({heading,topic,border}){
    let className="flex flex-row justify-center items-start solid border-deep-pink p-[20px] donation-benefit max-lg:w-full ";
    return(
        <div className={(window.innerWidth<=1024) ? ( border==="left" ? className+" border-[2px] active w-full " : className+"border-[2px] hidden"): ( border==="left"? className+" border-[2px]" : className+" border-t-[2px] border-b-[2px] border-r-[2px]")}>
        <div className="tick-icon leading-[25px]">
            <TaskAltIcon style={{color:"deeppink",marginRight:"10px"}}/>
        </div>
        <div>
          <h3 className='text-[20px] font-bold mb-[7px] max-sm:text-[16px]'>{heading}</h3>
          <p className='text-[18px] max-sm:text-[13px]'> {topic}</p>
        </div>
      </div>
    )
}