import "./slideshowCont.css"
import { slideshow } from "./slideshowobj";

export default function SlideshowCont({title,description,imgTitle,id}){
    const className="absolute top-0 w-full h-full min-h-[390px] text-light-blue flex justify-start items-center  bg-center bg-no-repeat bg-cover slideshowcont transition-all linear duration-1000";
    return(
        <div style={{backgroundImage:`url('/images/${imgTitle}.jpg')`, left:id===slideshow.length?`-100vw`:`${(id-1)*window.innerWidth}px`, zIndex:id===slideshow.length?-50:50}} className={id===1? (className+" active" ): className}>
            <div className="flex justify-center items-center bg-gradient-to-r from-white to-white opacity-[0.8] w-full h-full">
                <div className="w-full lg:w-[1280px] flex justify-start items-center ">
                <article className="w-[35%] min-w-[390px] h-[100%] flex flex-col justify-center items-start ml-[80px] lg:ml-[50px] max-sm:ml-[30px] max-sm:min-w-[70%]"> 
                <div className="title text-[27px] leading-[2rem] max-md:leading-[1.5rem] italic max-sm:text-[20px]">
                     <span className="text-deeppink">{title.substring(0,title.indexOf(" "))}</span><span>{title.substring(title.indexOf(" "))}</span>
                </div>
                <div className="description text-[20px] mt-[20px] italic max-md:leading-[1.5rem] max-sm:text-[16px] max-sm:leading-[18px]">
                     {description}
                </div>
                <div className="mt-[20px]">
                    <button className="py-[5px] px-[20px] text-white bg-deeppink rounded-[10px] text-[20px] self-start mr-[15px]">Donate</button>
                </div>
            </article>
                </div>
            </div>
            
        </div>
    )
}