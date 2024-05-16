

export default function Leftcontent(){
    return(
        <div className="leftcontent text-black flex flex-col justify-center items-center gap-[15px] w-[400px] max-xl:w-full">
         <h2 className="heading text-[20px] uppercase font-extrabold  ">Welcome to the Project Manager!</h2>
         <p className="about text-[16px] capitalize tracking-[0.3px] font-bold text-white">Here, You can manage details about your projects. You can
          <span className="uppercase font-semibold inline-block m-[5px] p-[5px] rounded-[5px] bg-white text-green-variant  "> save,</span>
          <span className="uppercase font-semibold inline-block m-[5px] p-[5px] rounded-[5px] bg-white text-green-variant ">view,</span>
          <span className="uppercase font-semibold inline-block m-[5px] p-[5px] rounded-[5px] bg-white text-green-variant ">create,</span>
          <span className="uppercase font-semibold inline-block m-[5px] p-[5px] rounded-[5px] bg-white text-green-variant ">update</span>  and 
          <span className="uppercase font-semibold inline-block m-[5px] p-[5px] rounded-[5px] bg-white text-green-variant "> delete</span>  your project metadata.</p>
        </div>
    )
}