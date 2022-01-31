import 'react-bootstrap';
import React, { useState, useEffect } from "react"
import Navigation from "./Navigation";

function Header(){
      const [navbar, setNavbar] = useState(false)
     
    
      //navbar scroll changeBackground function
      const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 70) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
    
      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background 
        window.addEventListener("scroll", changeBackground)
      })

    return(

        <header className={navbar ? "bg-white top-0 fixed ml-0 rounded w-full border-b border-white shadow-xl px-3 flex justify-between items-center" : "bg-transparent text-white font-bold strong fixed shadow w-full px-3 flex justify-between items-center"}>
            <span className="pb-3 pt-3 font-mono font-medium text-3xl px-6">
            BookSafari
            </span>
           <Navigation />
        </header>
    )
}
 export default Header;

 //Api key : AIzaSyCX-qfJpm_QQZLTJWDWOYD_dTyVMVmO0Ao className="ml-0 bg-blue-500 shadow w-full px-3 flex justify-between items-center
