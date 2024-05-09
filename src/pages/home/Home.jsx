import Navbar from "./components/navbar/Navbar";
import Slideshow from "./components/slideshow/Slideshow";
import Donation from "./components/donation/Donation";
import Whodonated from "./components/whodonated/Whodonated";
import Fundraiser from "./components/fundraiser/Fundraiser";
import "./home.css";

export default function Home(){
    return(
        <main className="w-full h-full relative home">
            <Navbar/>
            <section>
                <div className="w-full h-[100px]">
                </div>
            </section>
            <section>
                <Slideshow/>
            </section>
            <section className='flex w-full justify-center items-center'>
               <Donation/>
            </section>
            <section className="w-full py-[40px] flex justify-center items-center h-[170px]">
                <Whodonated/>
            </section>
            <section className="w-full py-[40px] flex justify-center items-center">
                 <Fundraiser/>
            </section>
        </main>
    )
}