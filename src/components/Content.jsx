import Leftcontent from "./Leftcontent"
import Imageslider from "./Imageslider"

export default function Content(){
    return(
        <div className="content w-full h-[fit-content] flex justify-center items-center">
              <div className="content-wrapper w-[95%] max-w-[1280px] min-h-[100vh] h-[fit-content] flex justify-between gap-[10px] items-center max-xl:flex-col-reverse ">
                 <div className="left-content w-[fit-content] my-[150px] max-xl:w-[60%] max-xl:text-center max-xl:mt-[25px] max-xl:mb-[15px] max-sm:w-[80%] max-sm:mb-[70px] max-sm:mt-[15px]">
                   <Leftcontent/>
                 </div>
                 <div className="right-content  w-[calc(100%-550px)] mt-[100px] mb-[50px] max-xl:w-[90%] max-xl:mt-[180px]">
                    <Imageslider/>
                 </div>
              </div>
        </div>
    )
}