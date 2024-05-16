
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import { useState } from "react";


export default function Navbaroutlet(){
    const [locate,setLocate]=useState("");
        return(
        <>
        <Navbar locate={locate} setLocate={setLocate}/>
        <Outlet context={{locate,setLocate}}/>      
        </>
    )
}