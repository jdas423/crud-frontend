import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {useState, useCallback} from "react"
export default function MissionCard({ bgImg, title, percent, text, supporters }) {
  const [show, setShow] = useState(false);

  const showFunc=useCallback(()=>{
      setShow(true);
  },[])

  const hideFunc=useCallback(()=>{
    setShow(false);
  },[]) 
  
  
  return (
    <section className="flex flex-col justify-center items-center rounded-[10px] mx-[15px] lg:w-[calc(100%-100px)] w-[80%] max-sm:w-[100%] max-lg:mt-[35px] bg-light-blue
     text-white  hover:scale-[1.05] transition-transform duration-[0.5s] ease-in-out cursor-pointer"   onMouseEnter={showFunc} onMouseLeave={hideFunc} >
      <div
        className={` bg-center bg-cover bg-no-repeat rounded-[10px] w-full aspect-[400/250]  `}
        style={{ backgroundImage: `url(./src/images/${bgImg}.jpg)` }}
      >
        <div className="flex justify-end items-start flex-col rounded-[10px] w-full h-full bg-gradient-to-t from-black via-transparent to-transparent text-white">
          <div className="ml-[15px] italic text-[25px] max-lg:text-[40px] max-lg:ml-[20px] max-sm:text-[25px]">
            Mission
          </div>
          <div className="ml-[15px] text-[30px] mb-[10px] mt-[-10px] max-lg:text-[45px] max-lg:mb-[20px] max-lg:ml-[20px] max-sm:text-[30px]">
            {title}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
       {!show && <div className="w-[20%]">
          <div className="w-[50%] ml-[20px]">
            <div className="circular-container">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="2.8"
                />
                <path
                  className="circle"
                  strokeDasharray="28,92"
                  d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="deeppink"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <text x="9" y="23" className="percentage text-[12px]" fill="white">
                  {percent}%
                </text>
              </svg>
            </div>
          </div>
        </div> } 
        {!show &&  <div className="flex flex-col justify-center items-start w-[80%] text-[20px] mt-[20px] mb-[20px] max-lg:text-[30px] max-sm:text-[20px]">
          <div>{text}</div>
          <div className="flex justify-center items-center mt-[-5px]">
            <div className="mr-[7px] text-deeppink">
              <PeopleAltIcon />
            </div>
            <div className="mt-[3px]">{supporters} Supporters</div>
          </div>
        </div>}
        {show && <button className="w-[80%] bg-deeppink text-white h-[55px] py-[20px] px-[20px] rounded-[10px] my-[20px] leading-[15px] ">
           Pledge monthly
          </button>}   
      </div>
    </section>
  );
}
