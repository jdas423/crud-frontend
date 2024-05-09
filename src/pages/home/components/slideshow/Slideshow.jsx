import SlideshowCont from "./SlideshowCont"
import { slideshow } from "./slideshowobj"
import { useEffect } from "react"

export default function Slideshow() {
    useEffect(()=>{
       const slides=document.querySelectorAll(".slideshow>div.slideshowcont");
       const indicators=document.querySelectorAll(".slideshow div.indicators");
       const mod=slides.length;
       const winWidth=parseFloat(window.innerWidth);
       let leftVal,prevSlide,nextSlide,prevSlideInd,activeSlideInd,nextSlideInd,activeSlide,intervalId=null;

       let slideShowFunc=()=>{
        activeSlide=document.querySelector(".active");
        if(activeSlide===slides[0]){
            prevSlide=slides[slides.length-1];
            nextSlide=slides[1];
            prevSlideInd=slides.length-1;
            nextSlideInd=1;
            activeSlideInd=0;
        }
        else if(activeSlide===slides[slides.length-1]){
            prevSlide=slides[slides.length-2];
            nextSlide=slides[0];
            prevSlideInd=slides.length-2;
            nextSlideInd=0;
            activeSlideInd=slides.length-1;

        }
        else{
           for(let i=1;i<slides.length;i++){
              if(activeSlide===slides[i]){
                prevSlide=slides[i-1];
                nextSlide=slides[i+1];
                prevSlideInd=i-1;
                nextSlideInd=i+1;
                activeSlideInd=i;

              }
           }
        }
        indicators[activeSlideInd].style.backgroundColor="#424769";
        indicators[nextSlideInd].style.backgroundColor="deeppink";
        activeSlide.classList.remove("active");
        nextSlide.classList.add("active");
        for(let i=1;i<slides.length;i++){
            leftVal=window.getComputedStyle(slides[(prevSlideInd+i)%mod]).getPropertyValue("left");
            leftVal=parseFloat(leftVal.substring(0,leftVal.lastIndexOf("p")));
            slides[(prevSlideInd+i)%mod].style.zIndex="50"; 
            slides[(prevSlideInd+i)%mod].style.left=`${leftVal-winWidth}px`;     
        }
        prevSlide.style.zIndex="-50";
        prevSlide.style.left=`${(slides.length-2)*winWidth}px`;
       }
       
       intervalId=setInterval(slideShowFunc,5000);
       let handleVisibilityFunc=()=>{
         if(document.hidden){
            intervalId && clearInterval(intervalId);
            intervalId= null;

         } 
         else if(!intervalId) intervalId=setInterval(slideShowFunc,5000);
       }

       document.addEventListener("visibilitychange",handleVisibilityFunc);
      
       return ()=>{
        document.removeEventListener("visibilitychange",handleVisibilityFunc);
        clearInterval(intervalId)
       }

    },[])

    return(
        <>
       <section className="slideshow w-full h-[35vw] min-h-[390px] relative overflow-hidden">
         {
            slideshow.map((slideshow)=>{
                return <SlideshowCont key={slideshow.id} id={slideshow.id} title={slideshow.title} description={slideshow.description} imgTitle={slideshow.image} />
            })
         }
         <div className="absolute flex content-center items-center w-[150px] z-[100] top-[90%] left-[calc(50%-75px)] ">
            {
                slideshow.map((slideshow,ind)=>{
                   return <div key={slideshow.id} className={ ind===0 ?"w-[20px] h-[5px] mr-[10px] rounded-[5px] bg-deeppink indicators" :"w-[20px] h-[5px] mr-[10px] rounded-[5px] bg-light-blue indicators"}></div>
                })
            }
         </div>
       </section>
        </>

    )
}
