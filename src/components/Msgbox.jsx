

export default function  Msgbox({msg}) {
    return (
       <div className="flex justify-center items-center px-[10px] py-[15px] bg-white">
           <h2 className="text-green-variant text-[16px] font-bold text-center ">Succefully {msg} your card!!!</h2>
       </div>
    )
}