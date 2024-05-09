
import {obj} from "./donationObj"
import DonationbenefitsCard from './DonationbenefitsCard';
import MissionCard from "./MissionCard";
import { missions } from "./missions";
import { useEffect } from "react";
import "./donation.css"

export default function Donation() {
  
  useEffect(() => {
    if(window.innerWidth<="1024"){
      const db=document.querySelectorAll(".donation-benefit");
      let activeInd=0;
      let activeSlide,nextSlide,intervalId;

      let fadeFunc=()=>{
        activeSlide=document.querySelector(".donation-benefit.active");
        nextSlide= activeInd === db.length-1 ? db[0] : db[activeInd+1];
        activeInd= activeInd === db.length-1 ? 0 : (activeInd+1);
        if(activeSlide.classList.contains("fade-in")) activeSlide.classList.remove("fade-in");
        activeSlide.classList.add("fade-out");
        activeSlide.classList.remove("active");
        setTimeout(()=>{
           activeSlide.classList.add("none-custom");
           if(activeSlide.classList.contains("flex-custom")) activeSlide.classList.remove("flex-custom");
           if(nextSlide.classList.contains("none-custom")) nextSlide.classList.remove("none-custom");
           nextSlide.classList.add("flex-custom");
           setTimeout(()=>{
             if(nextSlide.classList.contains("fade-out")) nextSlide.classList.remove("fade-out");
             nextSlide.classList.add("fade-in");
             nextSlide.classList.add("active");

           },200)
        },600)
      }
     
     
      intervalId=setInterval(fadeFunc,5000);
      let handleVisibilityFunc=()=>{
        if(document.hidden){
           intervalId && clearInterval(intervalId);
           intervalId= null;

        } 
        else if(!intervalId) intervalId=setInterval(fadeFunc,5000);
      }

      document.addEventListener("visibilitychange",handleVisibilityFunc);
     
      return ()=>{
       document.removeEventListener("visibilitychange",handleVisibilityFunc);
       clearInterval(intervalId)
      }
        
    }


  }, []);
 
  return (
      <div className="wrapper max-w-[1280px] w-[90%] flex flex-col justify-center items-center text-light-blue mt-[40px] mb-[40px]">
        <div className="text-[70px] max-sm:text-[40px]">Give Monthly</div>
        <div className="text-[30px] mb-[20px] mt-[-10px]  max-sm:mt-[-5px] max-sm:text-[20px] text-center">Sign up Once and Invest in India's future every month</div>
        <div className="flex justify-center items-center max-lg:h-[135px]">
             {
                obj.map((obj,ind)=>{
                    if(ind===0 ) return <DonationbenefitsCard key={obj.id} topic={obj.topic} heading={obj.heading} border={"left"} />
                    else return <DonationbenefitsCard key={obj.id} topic={obj.topic} heading={obj.heading} border={"other"}/>
                })
             }
        </div>
      
        <div className="flex justify-center items-center mt-[20px] w-full max-lg:flex-wrap">
          {
              missions.map((mission)=>{
                   return <MissionCard key={mission.id} bgImg={mission.bgImg} title={mission.title} percent={mission.percent} text={mission.text} supporters={mission.supporters}/>
              })
          }

        </div>
    
      </div>
  );
}
